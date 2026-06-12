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
  {
    id: "publications",
    label: "Publications",
    content: `
      <div class="pub-year">
        <h3>2026</h3>
        <ul class="pub-list">
          <li><span class="pub-tag journal">Journal</span>
            A paper entitled "RAG 시스템에서의 경계 정보 손실 완화를 위한 하이브리드 의미 기반 윈도우 청킹 기법"
            has been published in <em>한국정보과학회 데이터베이스 연구</em>. (2026.04)</li>
        </ul>
      </div>
      <div class="pub-year">
        <h3>2025</h3>
        <ul class="pub-list">
          <li><span class="pub-tag journal">Journal</span>
            A paper entitled "오픈소스 RAG 아키텍처를 활용한 도메인 지식 문서 질의응답 시스템의 설계 및 구현"
            has been published in <em>한국정보과학회 데이터베이스 연구</em>. (2025.09)</li>
        </ul>
      </div>
      <div class="pub-year">
        <h3>2009</h3>
        <ul class="pub-list">
          <li><span class="pub-tag journal">Journal</span>
            A paper entitled "Locality-based Peer Clustering for Efficient Overlay Networks"
            has been published in <em>INFORMATION — An International Interdisciplinary Journal</em>. (2009)</li>
        </ul>
      </div>
      <div class="pub-year">
        <h3>2008</h3>
        <ul class="pub-list">
          <li><span class="pub-tag conference">Conference</span>
            A paper entitled "대규모 데이타의 효율적인 전송을 위한 물리적 정보망을 이용한 클러스터링 기법"
            has been presented at <em>한국정보과학회 한국컴퓨터종합학술대회(KCC)</em>, Vol.35 No.1(C), pp.11-14. (2008.06)</li>
        </ul>
      </div>
      <div class="pub-year">
        <h3>2007</h3>
        <ul class="pub-list">
          <li><span class="pub-tag conference">Conference</span>
            A paper entitled "메타데이타를 삽입한 동영상 내용 편집 도구 개발"
            has been presented at <em>한국정보과학회 추계 학술발표회</em>, pp.50-54. (2007.10)</li>
        </ul>
      </div>
    `,
  },
  { id: "teaching",     label: "Teaching" },
  { id: "contact",      label: "Contact" },
];
