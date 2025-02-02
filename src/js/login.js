import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getDatabase, ref, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU',
  authDomain: 'project-team-10-5792d.firebaseapp.com',
  projectId: 'project-team-10-5792d',
  storageBucket: 'project-team-10-5792d.appspot.com',
  messagingSenderId: '76240638065',
  appId: '1:76240638065:web:5518f239b638187e380bd0',
  measurementId: 'G-CCNXH403RH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Inforamtion for the login
const formData = {};
const loginEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector("input[name='email']");
const passwordInputEl = document.querySelector("input[name='password']");
const gettingFormData = JSON.parse(localStorage.getItem('login-form'));

const updateFormData = () => {
  if (gettingFormData !== null) {
    emailInputEl.value =
      gettingFormData.email.length > 0 ? gettingFormData.email : '';
    passwordInputEl.value =
      gettingFormData.message.length > 0 ? gettingFormData.message : '';
    formData['email'] = emailInputEl.value;
    formData['password'] = passwordInputEl.value;
    localStorage.setItem('login-form', JSON.stringify(formData));
  }
};

const onInput = e => {
  formData[e.target.name.trim()] = e.target.value.trim();
  localStorage.setItem('login-form', JSON.stringify(formData));

  if (formData.email === undefined) {
    formData.email = '';
  }
  if (formData.password === undefined) {
    formData.password = '';
  }
};

const onLogin = e => {
  e.preventDefault();
  loginEl.reset();
  const { password, email } = formData;
  if (auth.currentUser) {
    Notiflix.Notify.warning(`You are already signed in!`);
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('_userEmail', JSON.stringify(email));
      localStorage.removeItem('login-form');

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });
      Notiflix.Notify.success(`You are logging in now...`);
      setTimeout(
        () => (window.location = 'https://volodya1989.github.io/books-store/'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

document.addEventListener('DOMContentLoaded', throttle(updateFormData, 500));
if (!loginEl) {
  return;
} else {
  loginEl.addEventListener('input', throttle(onInput, 500));
  loginEl.addEventListener('submit', onLogin);
}
