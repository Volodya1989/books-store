function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var a=o("gKkQl"),l=o("7Y9D8"),s=o("eyjy7");const c=(0,a.initializeApp)({apiKey:"AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU",authDomain:"project-team-10-5792d.firebaseapp.com",projectId:"project-team-10-5792d",storageBucket:"project-team-10-5792d.appspot.com",messagingSenderId:"76240638065",appId:"1:76240638065:web:5518f239b638187e380bd0",measurementId:"G-CCNXH403RH"}),r=(0,s.getAuth)(c),d=(document.querySelector(".login-section"),r.currentUser,document.querySelector(".user-profile")),g=t=>{(0,s.signOut)(r).then((()=>{e(l).Notify.success("You are signing out..."),setTimeout((()=>window.location="http://localhost:1234/login.html"),3e3)})).catch((t=>{t.code;const n=t.message;e(l).Notify.failure(n)}))},h=()=>{(0,s.signOut)(r).then((()=>{e(l).Notify.info("You are redirected to sign up..."),setTimeout((()=>window.location="http://localhost:1234/sign-up.html"),3e3)})).catch((t=>{t.code;const n=t.message;e(l).Notify.failure(n)}))};(0,s.onAuthStateChanged)(r,(e=>{null!==e?(console.log("User logged in."),d.innerHTML="Log Out",d.addEventListener("click",g)):(console.log("No user."),d.innerHTML="Sign Up",d.addEventListener("click",h))})),o("dhjH8"),o("gyeM6"),o("9L2ks"),o("2hTmC"),o("8BGGW");var u=o("5DwtN"),m=o("jJ57b"),p=o("gyeM6");o("7Y9D8");const b=document.querySelector(".category-list"),f=document.querySelector(".load"),y=document.querySelector(".loader");(0,u.fetchAllCategories)().then((e=>{y.classList.remove("is-hidden");const t=e.map((({list_name:e})=>`<li class="category-list-item global-list light-theme theme-switch">${e}</li>`)).join("");b.insertAdjacentHTML("beforeend",t);const n=document.querySelectorAll(".category-list-item");n.forEach((e=>{e.addEventListener("click",(function(){n.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))})),"light"===m.shopping_info.theme?(0,p.renderTheme)("light"):(0,p.renderTheme)("dark"),f.classList.add("unvisible")})).catch((e=>{console.log(e)})),o("5DwtN"),o("jqvOP"),o("5DwtN");u=o("5DwtN");var k=o("2hTmC");m=o("jJ57b"),p=o("gyeM6");const L=document.querySelector(".category-list"),v=document.querySelector(".tb-container"),w=document.querySelector(".heading-primary"),T=document.querySelector("#allctgr"),j=document.querySelector(".loader");j.classList.add("is-hidden"),L.addEventListener("click",(async function(e){v.innerHTML="",j.classList.remove("is-hidden");const t=e.target.textContent,n=T.textContent;if(t===n){v.innerHTML="",(0,u.fetchTopBooks)().then($);const e="Best Sellers Books",t=e.split(" ").splice(0,e.split(" ").length-1).join(" "),n=e.split(" ")[e.split(" ").length-1];w.innerHTML=`${t} <span class="colored-heading">${n}</span>`}else{const e=t.split(" ").splice(0,t.split(" ").length-1).join(" "),n=t.split(" ")[t.split(" ").length-1];w.innerHTML=`${e} <span class="colored-heading">${n}</span>`,w.classList.add("ctg-maintitle"),v.classList.add("flex-container");const i=await(0,u.fetchBooksByExactCategory)(t);j.classList.add("is-hidden"),function({data:e}){v.innerHTML="";const t=e.map((({list_name:e,book_image:t="https://bookcart.azurewebsites.net/Upload/Default_image.jpg",title:n="title not available",author:i="anonymous",description:o,_id:a})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${a}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${t}" alt="${n}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${n}</p>\n                <p class="tb-book-author global-p">${i}</p>\n              </div>\n            </a>\n          </li>`)).join("");v.innerHTML=t}(i)}})),setTimeout((e=>{j.classList.add("is-hidden")}),2500);const S=document.querySelector(".no-books-card");function $({data:e}){if(0==e.length)S.classList.remove("is-hidden");else{const t=e.map((({list_name:e,books:t})=>`\n      <li class="tb-category-container">\n        <h2 class='tb-category global-title'>${e}</h2>\n        <div class='tb-books-container'>\n          <ul class="global-list flex-container hidden-books">\n            ${t.map((({list_name:e,book_image:t="https://bookcart.azurewebsites.net/Upload/Default_image.jpg",title:n="title not available",author:i="anonymous",description:o,_id:a})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${a}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${t}" alt="${n}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${n}</p>\n                <p class="tb-book-author global-p">${i}</p>\n              </div>\n            </a>\n          </li>\n          `)).join("")}\n          </ul>\n        </div>\n        <button class="tb-button global-button light-theme theme-switch">See more</button>\n      </li>\n      `)).join("");j.classList.add("is-hidden"),v.insertAdjacentHTML("beforeend",t),"light"===m.shopping_info.theme?(0,p.renderTheme)("light"):(0,p.renderTheme)("dark"),(0,k.modalWindow)()}}(0,u.fetchTopBooks)().then($),v.addEventListener("click",(async function(e){if(e.target.matches("button")){let t=e.target.closest(".tb-category-container").firstChild.nextSibling.textContent,n=e.target.closest(".tb-category-container").firstChild.nextSibling.nextSibling.nextSibling;!function({data:e},t){const n=`<ul class="global-list flex-container">\n            ${e.map((({list_name:e,book_image:t="https://bookcart.azurewebsites.net/Upload/Default_image.jpg",title:n="title not available",author:i="anonymous",description:o,_id:a})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${a}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${t}" alt="${n}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${n}</p>\n                <p class="tb-book-author global-p">${i}</p>\n              </div>\n            </a>\n          </li>`)).join("")}\n          </ul>`;t.innerHTML=n}(await(0,u.fetchBooksByExactCategory)(t),n),e.target.classList.add("is-hidden"),j.classList.add("is-hidden")}})),o("jJ57b"),o("bj3qq");
//# sourceMappingURL=index.d509145c.js.map
