(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();document.addEventListener("DOMContentLoaded",async function(){const n="https://api.knowmydetails.com/web/kmd/main",s="/getPersonDetails",r=new URLSearchParams(window.location.search).get("qrcode");console.log("Scanned QR Code:",r);const t=new Date().getFullYear(),a="https://www.knowmydetails.com/";let i={};try{i=await u(),console.log("User Location:",i)}catch(l){console.warn("Could not get location:",l)}const d={qrCode:r,latitude:i.lat||null,longitude:i.lon||null};console.log("Final body before API call:",d),axios.post(n+s,d).then(l=>{const e=l.data.personInfo;console.log(e),l.data.galleryInfo;const m=document.getElementById("owner-Photo");m.src=e.personPhotoImage?`data:image/${e.personPhotoImageFormat};base64,${e.personPhotoImage}`:"/assets/default-user.webp",m.addEventListener("click",()=>{document.getElementById("fullscreenImage").src=e.personPhotoImage?`data:image/${e.personPhotoImageFormat};base64,${e.personPhotoImage}`:"/assets/default-user.webp",document.getElementById("fullscreenViewer").style.display="flex",history.pushState({viewerOpen:!0},"")});const b=`
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-telephone-fill text-primary fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Mobile</small>
            <a href="tel:+91${e.mobileNo}" class="text-decoration-none text-dark break-word">+91 ${e.mobileNo}</a>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-calendar2-check text-primary fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Account created on</small>
            <p class="mb-0 text-dark break-word">${e.accountCreatedOn}</p>
          </div>
        </div>

          <div class="d-flex align-items-start mb-3">
          <i class="bi bi-person-square text-success fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Account status</small>
            <p class="mb-0 text-dark break-word">${e.accountStatus}</p>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-envelope-fill text-danger fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Email</small>
            <a href="mailto:${e.emailId}" class="text-decoration-none text-dark break-word">${e.emailId}</a>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-geo-alt-fill text-warning fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Address</small>
            <p class="mb-0 break-word">${e.address}</p>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-globe text-secondary fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Website URL</small>
            <a href="${e.websiteURL}" target="_blank" class="text-decoration-none text-dark break-word">${e.websiteURL}</a>
          </div>
        </div>

        <div class="d-flex align-items-start mb-3">
         <i class="bi bi-whatsapp text-success fs-5 me-3"></i>
          <div>
           <small class="text-muted d-block">WhatsApp URL</small>
             <a href="${e.whatsapp}" target="_blank" class="text-decoration-none text-dark break-word">
             ${e.whatsapp}
           </a>
          </div>
         </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-facebook text-primary fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Facebook URL</small>
            <a href="${e.facebook}" target="_blank" class="text-decoration-none text-dark break-word">${e.facebook}</a>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-twitter text-info fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Twitter URL</small>
            <a href="${e.twitter}" target="_blank" class="text-decoration-none text-dark break-word">${e.twitter}</a>
          </div>
        </div>
  
        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-instagram text-danger fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Instagram URL</small>
            <a href="${e.instagram}" target="_blank" class="text-decoration-none text-dark break-word">${e.instagram}</a>
          </div>
        </div>

        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-youtube text-danger fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Youtube URL</small>
            <a href="${e.youtube}" target="_blank" class="text-decoration-none text-dark break-word">${e.youtube}</a>
          </div>
        </div>

        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-linkedin text-primary fs-5 me-3"></i>
          <div>
            <small class="text-muted d-block">Linkedin URL</small>
            <a href="${e.linkedin}" target="_blank" class="text-decoration-none text-dark break-word">${e.linkedin}</a>
          </div>
        </div>

        <div class="d-flex align-items-start mb-3">
          <i class="bi bi-person-lines-fill text-primary fs-5 me-3"></i>
           <div>
           <small class="text-muted d-block">About myself</small>
          <p class="mb-0 text-dark break-word">${e.aboutMyself}</p>
        </div>
      </div>
      `;document.getElementById("contact-info").innerHTML=b,document.getElementById("owner").innerHTML=e.personName,document.getElementById("viewsNo").innerHTML=`<i class="bi bi-eye-fill me-1 text-muted"></i>Views: <span class="count">${e.noOfViews}</span>`,document.getElementById("person_position").innerHTML=e.position,document.getElementById("footer-msg").innerHTML=`<a href=${a} target="blank">© ${t} ${e.shopName?e.shopName:"Know My Details"}</a>`}).catch(l=>{console.error("API fetch failed:",l),document.getElementById("contact-info").innerHTML='<p class="text-danger">Failed to load contact info.</p>'});const c=document.getElementById("fullscreenViewer");c.addEventListener("click",()=>{c.style.display="none",history.back()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&c.style.display==="flex"&&(c.style.display="none",history.back())}),window.addEventListener("popstate",()=>{c.style.display==="flex"&&(c.style.display="none")})});function u(){return new Promise((n,s)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{n({lat:o.coords.latitude,lon:o.coords.longitude})},o=>{console.error("Location access denied or failed:",o),s(o)},{enableHighAccuracy:!0}):s("Geolocation not supported in this browser")})}const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",g="/vite.svg";function p(n){let s=0;const o=r=>{s=r,n.innerHTML=`count is ${s}`};n.addEventListener("click",()=>o(s+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${g}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${f}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;p(document.querySelector("#counter"));
