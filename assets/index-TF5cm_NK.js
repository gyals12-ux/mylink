(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const l={name:"MyLink",bio:"반갑습니다! 저의 다양한 활동과 SNS 링크를 한곳에서 확인해보세요. ✨",avatar:"./avatar.svg",links:[{id:"instagram",title:"Instagram",subtitle:"인스타그램",description:"일상 사진과 스토리 둘러보기",url:"",color:"#E1306C",badge:"Photo"},{id:"youtube",title:"YouTube",subtitle:"유튜브 채널",description:"영상 콘텐츠 및 브이로그",url:"",color:"#FF0000",badge:"Video"},{id:"github",title:"GitHub",subtitle:"github.com/gyals12-ux",description:"소스코드 및 개발 프로젝트",url:"https://github.com/gyals12-ux",color:"#24292e",badge:"Dev"},{id:"email",title:"Email",subtitle:"이메일 보내기",description:"협업 제안 및 문의 메일 보내기",url:"",color:"#0284c7",badge:"Contact"}],footer:{text:"© 2026 MyLink. Built with HTML, CSS, JavaScript & Vite.",madeWith:"Made for University Project 🎓"}},s={instagram:`
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  `,youtube:`
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  `,github:`
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  `,email:`
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,arrowRight:`
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  `,copy:`
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `,check:`
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `,sun:`
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `,moon:`
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `,link:`
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,info:`
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `},a=document.getElementById("theme-toggle-btn"),f=document.getElementById("copy-header-btn"),y=document.getElementById("copy-footer-btn"),d=document.getElementById("profile-avatar"),v=document.getElementById("profile-name"),x=document.getElementById("profile-bio"),u=document.getElementById("links-container"),k=document.getElementById("footer-text"),w=document.getElementById("footer-madewith"),h=document.getElementById("toast"),b=document.getElementById("toast-msg");let m=null;function M(){const t=localStorage.getItem("mylink-theme"),i=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;C(t||(i?"dark":"light")),a&&a.addEventListener("click",()=>{const o=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";C(o),g(o==="dark"?"🌙 다크 모드로 전환되었습니다.":"☀️ 라이트 모드로 전환되었습니다.")})}function C(t){document.documentElement.setAttribute("data-theme",t),localStorage.setItem("mylink-theme",t),a&&(a.innerHTML=t==="dark"?s.sun:s.moon,a.setAttribute("title",t==="dark"?"라이트 모드로 변경":"다크 모드로 변경"),a.setAttribute("aria-label",t==="dark"?"라이트 모드로 변경":"다크 모드로 변경"))}function T(){var t,i;if(v&&(v.textContent=l.name),x&&(x.textContent=l.bio),d){const e=l.avatar,r="/mylink/",o=e.startsWith("./")?`${r}${e.slice(2)}`:e;d.src=o,d.alt=`${l.name} 프로필 사진`,d.onerror=()=>{d.src=`${r}avatar.svg`}}k&&((t=l.footer)!=null&&t.text)&&(k.textContent=l.footer.text),w&&((i=l.footer)!=null&&i.madeWith)&&(w.textContent=l.footer.madeWith)}function L(t,i){if(!t||typeof t!="string")return"";const e=t.trim();return e===""?"":i==="email"?e.startsWith("mailto:")?e:`mailto:${e}`:/^https?:\/\//i.test(e)?e:`https://${e}`}function I(){if(!u)return;u.innerHTML="";const t=l.links||[];let i=0;if(t.forEach(e=>{const r=L(e.url,e.type||e.id),o=!!r;if(!o)return;i++;const n=document.createElement(o?"a":"div");n.className=`link-card ${o?"":"disabled"}`,n.style.setProperty("--card-accent",e.color||"#6366f1"),o?(n.href=r,e.type!=="email"&&!r.startsWith("mailto:")&&(n.target="_blank",n.rel="noopener noreferrer"),n.setAttribute("aria-label",`${e.title} 바로가기 (새 탭)`)):(n.setAttribute("aria-disabled","true"),n.setAttribute("title","링크 주소가 아직 등록되지 않았습니다."));const c=s[e.id]||s[e.type]||s.link;n.innerHTML=`
      <div class="link-icon-box" style="--card-accent: ${e.color||"#6366f1"}">
        ${c}
      </div>
      <div class="link-content">
        <div class="link-title-row">
          <span class="link-title">${p(e.title)}</span>
          ${e.badge?`<span class="link-badge">${p(e.badge)}</span>`:""}
        </div>
        <div class="link-desc">${p(e.description||e.subtitle||"")}</div>
      </div>
      <div class="link-arrow">
        ${s.arrowRight}
      </div>
    `,u.appendChild(n)}),i===0){const e=document.createElement("div");e.className="empty-guide-card",e.innerHTML=`
      <div class="empty-guide-title">
        ${s.info}
        <span>링크 설정 가이드</span>
      </div>
      <div class="empty-guide-desc">
        현재 등록된 SNS 링크가 없습니다.<br>
        <span class="code-pill">src/profile-config.js</span> 파일에서 <strong>Instagram, YouTube, GitHub, Email</strong> 주소를 입력하면 여기에 멋진 버튼이 나타납니다! ✨
      </div>
    `,u.appendChild(e)}}async function B(){const t=window.location.href;try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t);else{const i=document.createElement("input");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.focus(),i.select(),document.execCommand("copy"),document.body.removeChild(i)}g("🎉 마이링크 주소가 복사되었습니다!")}catch(i){console.error("클립보드 복사 실패:",i),g("주소 복사에 실패했습니다. 직접 복사해주세요.")}}function g(t){!h||!b||(b.textContent=t,h.classList.add("show"),m&&clearTimeout(m),m=setTimeout(()=>{h.classList.remove("show")},2600))}function p(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function E(){M(),T(),I(),f&&f.addEventListener("click",B),y&&y.addEventListener("click",B)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E();
