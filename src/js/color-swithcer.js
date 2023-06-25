const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', function () {
  if (this.getAttribute('data-checked') === 'true') {
    this.classList.remove('active');
    this.setAttribute('data-checked', false);
  } else {
    this.classList.add('active');
    this.setAttribute('data-checked', true);
  }
});

// for_THEME DarkandWhite-LOGO
function toggleLogoImage() {
  const logoImages = document.querySelectorAll('.logo-image');

  logoImages.forEach(logoImage => {
    if (logoImage.classList.contains('light-theme')) {
      logoImage.src = require('/src/images/header/logo-light.png');
    } else if (logoImage.classList.contains('dark-theme')) {
      logoImage.src = require('/src/images/header/logo-dark.png');
    }
  });
}

window.addEventListener('load', function () {
  toggleLogoImage();

  const themeSwitch = document.querySelector('.theme-switch');
  themeSwitch.addEventListener('click', function () {
    toggleLogoImage();
  });
});

const userProfileLoggedInButton = document.getElementById(
  'userProfileLoggedInk'
);
const logoutModal = document.getElementById('logoutModal');
const logoutButton = logoutModal.querySelector('.custom-profile');

let isLogoutModalOpen = false;

userProfileLoggedInButton.addEventListener('click', toggleLogoutModal);
logoutButton.addEventListener('click', logout);

function toggleLogoutModal() {
  if (isLogoutModalOpen) {
    closeLogoutModal();
  } else {
    openLogoutModal();
  }
}

function openLogoutModal() {
  logoutModal.style.display = 'block';
  isLogoutModalOpen = true;
}

function closeLogoutModal() {
  logoutModal.style.display = 'none';
  isLogoutModalOpen = false;
}

function logout() {
  // Додайте код для виходу з облікового запису або виконайте необхідні дії
}
