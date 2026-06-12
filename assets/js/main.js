/**
 * main.js — 메뉴/섹션 렌더링 + 테마 전환 + 모바일 내비게이션
 * 메뉴 관리는 menu.config.js에서만 하면 됩니다. 이 파일은 수정 불필요.
 */
(function () {
  "use strict";

  /* ---------- 1. 메뉴/섹션 자동 생성 ---------- */
  const navMenu = document.getElementById("navMenu");
  const main = document.getElementById("siteMain");

  SITE_MENUS.forEach(function (item) {
    // 상단 메뉴
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + item.id;
    a.textContent = item.label;
    li.appendChild(a);
    navMenu.appendChild(li);

    // 본문 섹션
    const section = document.createElement("section");
    section.id = item.id;

    if (item.type === "hero") {
      section.className = "hero";
      section.innerHTML = '<div class="container hero-inner">' + (item.content || "") + "</div>";
    } else {
      section.className = "section";
      const title = item.title || item.label;
      const body = item.content || '<p class="placeholder">콘텐츠 준비 중입니다. (Coming soon)</p>';
      section.innerHTML =
        '<div class="container">' +
        '<h2 class="section-title">' + title + "</h2>" +
        '<div class="section-body">' + body + "</div>" +
        "</div>";
    }
    main.appendChild(section);
  });

  /* ---------- 2. 테마 전환 (라이트/다크) ---------- */
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("swzlab-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    root.setAttribute("data-theme", "dark");
  }
  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("swzlab-theme", next);
  });

  /* ---------- 3. 모바일 햄버거 메뉴 ---------- */
  const hamburger = document.getElementById("hamburgerBtn");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  /* ---------- 4. 현재 섹션 메뉴 하이라이트 (스크롤 위치 기반) ---------- */
  const links = Array.prototype.slice.call(navMenu.querySelectorAll("a"));
  const sections = Array.prototype.slice.call(main.querySelectorAll("section"));
  const headerH = document.querySelector(".site-header").offsetHeight;
  let clickLock = false; // 클릭 직후 스크롤 애니메이션 중 깜빡임 방지

  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + id);
    });
  }

  function currentSectionId() {
    // 페이지 맨 아래: 마지막 섹션
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      return sections[sections.length - 1].id;
    }
    // 헤더 바로 아래 기준선을 지난 마지막 섹션
    const line = window.scrollY + headerH + 1;
    let id = sections[0].id;
    sections.forEach(function (s) {
      if (s.offsetTop <= line) id = s.id;
    });
    return id;
  }

  function onScroll() {
    if (clickLock) return;
    setActive(currentSectionId());
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // 클릭 시 즉시 하이라이트 고정, 스크롤 종료 후 잠금 해제
  let unlockTimer = null;
  navMenu.addEventListener("click", function (e) {
    if (e.target.tagName !== "A") return;
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
    const id = e.target.getAttribute("href").slice(1);
    setActive(id);
    clickLock = true;
    clearTimeout(unlockTimer);
    // smooth scroll이 끝날 때까지 잠금 유지
    const release = function () {
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(function () {
        clickLock = false;
        window.removeEventListener("scroll", release);
        setActive(currentSectionId());
      }, 120);
    };
    window.addEventListener("scroll", release, { passive: true });
    unlockTimer = setTimeout(function () { clickLock = false; }, 1200);
  });
})();
