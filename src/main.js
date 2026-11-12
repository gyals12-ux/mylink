/**
 * =========================================================================
 * 🚀 MyLink (마이링크) 메인 스크립트
 * =========================================================================
 */

import { profileConfig } from './profile-config.js';
import { icons } from './icons.js';

// DOM 요소 캐싱
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const copyHeaderBtn = document.getElementById('copy-header-btn');
const copyFooterBtn = document.getElementById('copy-footer-btn');
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const linksContainer = document.getElementById('links-container');
const footerText = document.getElementById('footer-text');
const footerMadeWith = document.getElementById('footer-madewith');
const toastEl = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

let toastTimer = null;

/**
 * 1. 테마(다크 모드 / 라이트 모드) 초기화 및 관리
 */
function initTheme() {
  const savedTheme = localStorage.getItem('mylink-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(newTheme === 'dark' ? '🌙 다크 모드로 전환되었습니다.' : '☀️ 라이트 모드로 전환되었습니다.');
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mylink-theme', theme);

  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
    themeToggleBtn.setAttribute('title', theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경');
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경');
  }
}

/**
 * 2. 프로필 정보 렌더링
 */
function renderProfile() {
  if (profileName) profileName.textContent = profileConfig.name || '마이링크';
  if (profileBio) profileBio.textContent = profileConfig.bio || '';

  if (profileAvatar) {
    const rawAvatar = profileConfig.avatar || './avatar.svg';
    const baseUrl = import.meta.env.BASE_URL || './';
    const resolvedAvatar = rawAvatar.startsWith('./')
      ? `${baseUrl}${rawAvatar.slice(2)}`
      : rawAvatar;

    profileAvatar.src = resolvedAvatar;
    profileAvatar.alt = `${profileConfig.name} 프로필 사진`;

    // 이미지 로드 실패 시 기본 아바타로 안전하게 fallback
    profileAvatar.onerror = () => {
      profileAvatar.src = `${baseUrl}avatar.svg`;
    };
  }

  if (footerText && profileConfig.footer?.text) {
    footerText.textContent = profileConfig.footer.text;
  }
  if (footerMadeWith && profileConfig.footer?.madeWith) {
    footerMadeWith.textContent = profileConfig.footer.madeWith;
  }
}

/**
 * 3. 링크 URL 형식 유효화 및 정제
 */
function formatUrl(rawUrl, type) {
  if (!rawUrl || typeof rawUrl !== 'string') return '';
  const trimmed = rawUrl.trim();
  if (trimmed === '') return '';

  if (type === 'email') {
    return trimmed.startsWith('mailto:') ? trimmed : `mailto:${trimmed}`;
  }

  // http:// 나 https:// 로 시작하지 않으면 https:// 추가
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function getIconForLink(link) {
  const key = (link.type || link.id || '').toLowerCase();
  const title = (link.title || '').toLowerCase();
  const url = (link.url || '').toLowerCase();

  if (icons[key]) return icons[key];
  if (title.includes('instagram') || url.includes('instagram.com')) return icons.instagram;
  if (title.includes('youtube') || url.includes('youtube.com') || url.includes('youtu.be')) return icons.youtube;
  if (title.includes('github') || url.includes('github.com')) return icons.github;
  if (title.includes('email') || title.includes('mail') || url.includes('@') || url.startsWith('mailto:')) return icons.email;

  return icons.link;
}

/**
 * 4. 링크 카드 버튼 렌더링
 * - 요구사항: "링크 주소가 입력되지 않은 버튼은 비활성화하거나 숨겨 줘."
 * - hideEmptyLinks 옵션에 따라 숨기거나 비활성화 처리
 */
function renderLinks() {
  if (!linksContainer) return;
  linksContainer.innerHTML = '';

  const links = profileConfig.links || [];
  const hideEmpty = profileConfig.hideEmptyLinks !== false; // 기본값: true (숨김)

  let visibleCount = 0;

  links.forEach((link) => {
    const formattedUrl = formatUrl(link.url, link.type || link.id);
    const hasUrl = Boolean(formattedUrl);

    // 숨김 옵션이고 URL이 없으면 렌더링하지 않음
    if (hideEmpty && !hasUrl) {
      return;
    }

    visibleCount++;

    const card = document.createElement(hasUrl ? 'a' : 'div');
    card.className = `link-card ${!hasUrl ? 'disabled' : ''}`;
    card.style.setProperty('--card-accent', link.color || '#6366f1');

    if (hasUrl) {
      card.href = formattedUrl;
      // 외부 링크는 새 탭으로 열기 (Email 제외)
      if (link.type !== 'email' && !formattedUrl.startsWith('mailto:')) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }
      card.setAttribute('aria-label', `${link.title} 바로가기 (새 탭)`);
    } else {
      card.setAttribute('aria-disabled', 'true');
      card.setAttribute('title', '링크 주소가 아직 등록되지 않았습니다.');
    }

    // 스마트 아이콘 매핑
    const iconSvg = getIconForLink(link);

    card.innerHTML = `
      <div class="link-icon-box" style="--card-accent: ${link.color || '#6366f1'}">
        ${iconSvg}
      </div>
      <div class="link-content">
        <div class="link-title-row">
          <span class="link-title">${escapeHtml(link.title)}</span>
          ${link.badge ? `<span class="link-badge">${escapeHtml(link.badge)}</span>` : ''}
        </div>
        <div class="link-desc">${escapeHtml(link.description || link.subtitle || '')}</div>
      </div>
      <div class="link-arrow">
        ${icons.arrowRight}
      </div>
    `;

    linksContainer.appendChild(card);
  });

  // 만약 모든 링크가 비워져 있어서 화면에 하나도 표시되지 않을 경우
  // 친절한 가이드 카드 표시
  if (visibleCount === 0) {
    const guideCard = document.createElement('div');
    guideCard.className = 'empty-guide-card';
    guideCard.innerHTML = `
      <div class="empty-guide-title">
        ${icons.info}
        <span>링크 설정 가이드</span>
      </div>
      <div class="empty-guide-desc">
        현재 등록된 SNS 링크가 없습니다.<br>
        <span class="code-pill">src/profile-config.js</span> 파일에서 <strong>Instagram, YouTube, GitHub, Email</strong> 주소를 입력하면 여기에 멋진 버튼이 나타납니다! ✨
      </div>
    `;
    linksContainer.appendChild(guideCard);
  }
}

/**
 * 5. 마이링크 주소 클립보드 복사 기능
 */
async function copyCurrentUrl() {
  const currentUrl = window.location.href;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentUrl);
    } else {
      // Fallback 복사 방식
      const tempInput = document.createElement('input');
      tempInput.value = currentUrl;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
    showToast('🎉 마이링크 주소가 복사되었습니다!');
  } catch (err) {
    console.error('클립보드 복사 실패:', err);
    showToast('주소 복사에 실패했습니다. 직접 복사해주세요.');
  }
}

/**
 * 6. 토스트 팝업 표시
 */
function showToast(message) {
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = message;
  toastEl.classList.add('show');

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

/**
 * XSS 방지 유틸
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 7. 초기화 실행
 */
function init() {
  initTheme();
  renderProfile();
  renderLinks();

  // 상단 공유/복사 버튼 이벤트
  if (copyHeaderBtn) {
    copyHeaderBtn.addEventListener('click', copyCurrentUrl);
  }

  // 하단 공유/복사 버튼 이벤트
  if (copyFooterBtn) {
    copyFooterBtn.addEventListener('click', copyCurrentUrl);
  }
}

// DOM 준비 시 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
