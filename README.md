# SWZ Lab — swz-lab.github.io

원페이지 정적 사이트. 빌드 과정 없이 GitHub Pages에서 바로 서비스됩니다.

## 구조
```
index.html              # 페이지 골격 (수정할 일 거의 없음)
assets/js/menu.config.js  # ★ 메뉴/섹션 관리 — 이 파일만 수정
assets/js/main.js       # 메뉴 렌더링·테마 전환 로직 (수정 불필요)
assets/css/style.css    # 테마 색상(CSS 변수)·스타일
img/                    # 이미지
```

## 메뉴 추가/삭제
`assets/js/menu.config.js`의 `SITE_MENUS` 배열만 수정하면 상단 메뉴와 본문 섹션이 자동 생성됩니다.

```js
{ id: "gallery", label: "Gallery" },                  // 추가: 한 줄 추가
{ id: "news", label: "News", content: "<p>...</p>" }, // 내용 입력: content에 HTML
```

## 테마 색상 변경
`assets/css/style.css` 상단의 CSS 변수 수정:
- 라이트 테마: `:root, [data-theme="light"]` — 기본 짙은 보라(#4c1d95)
- 다크 테마: `[data-theme="dark"]` — 어두운 남색(#0a0f1d 배경, #38507f 강조)
