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
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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
  navMenu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
    }
  });

  /* ---------- 4. 현재 섹션 메뉴 하이라이트 ---------- */
  const links = navMenu.querySelectorAll("a");
  const sections = main.querySelectorAll("section");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach(function (s) { observer.observe(s); });
})();
