/**
 * ============================================================
 *  menu.config.js — 사이트 메뉴/섹션 설정 (이 파일만 수정하면 됨)
 * ============================================================
 *  메뉴 추가: 아래 배열에 객체 한 줄 추가
 *  메뉴 삭제: 해당 객체 한 줄 삭제
 *  순서 변경: 배열 순서 변경
 *
 *  필드 설명
 *   - id      : 섹션 앵커 id (영문 소문자, 공백 없이)
 *   - label   : 상단 메뉴에 표시될 이름
 *   - type    : "hero"(메인 배너) | "section"(일반 섹션)
 *   - title   : 섹션 제목 (생략 시 label 사용)
 *   - content : 섹션 본문 HTML (생략 시 준비중 문구 표시)
 * ============================================================
 */
const SITE_MENUS = [
  {
    id: "home",
    label: "Home",
    type: "hero",
    content: `
      <p class="hero-kicker">DX · Information Security · Applied AI</p>
      <h1>SWZ Lab</h1>
      <p class="hero-desc">시스템에서 연구로, 연구에서 현장으로</p>
    `,
  },
  { id: "news",         label: "News" },
  { id: "photo",        label: "Photo" },
  { id: "research",     label: "Research" },
  { id: "people",       label: "People" },
  { id: "publications", label: "Publications" },
  { id: "teaching",     label: "Teaching" },
  { id: "contact",      label: "Contact" },
];
