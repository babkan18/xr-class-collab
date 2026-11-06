# 검증 기록

검증일: 2026-11-06. 기준: 제공된 Google Docs의 MY XR UNIVERSE 설계안.

| 항목 | 결과 | 방법·범위 |
|---|---|---|
| 6개 항목 개인화 | 통과 | 테스트 사본에서 닉네임·소개·AR·기술 3개·프로젝트·GitHub 사용자명 변경 후 브라우저 DOM 확인 |
| 학생·강사 예시 분리 | 통과 | XR Explorer 학생 기본값 / NOVA 강사용 기획 예시 |
| 프로젝트 상세 3개 | 통과 | 버튼별 제목·설명·상태 확인, Escape·닫기 버튼 |
| 모바일 메뉴 | 통과 | 390px iframe 뷰포트에서 펼치기·섹션 이동 확인 |
| 반응형 | 통과 | 데스크톱 약 1350px, 320·390·768px iframe 뷰포트; 모바일·태블릿 문서 가로 넘침 없음 |
| GitHub 링크 | 통과 | 미설정 안내 및 설정 후 계정·저장소 URL 생성 확인. 실제 저장소 존재·권한 자동 검증 아님 |
| 색상 테마 | 통과 | 시안→바이올렛 버튼 변경과 다른 페이지 로딩 시 저장된 선택 확인 |
| 실습 체크리스트 | 통과 | 체크 1/5, 새로고침 후 유지, 초기화 0/5 |
| 외부 의존성 | 없음 | 외부 스크립트·폰트·이미지·API 요청 없이 HTML/CSS/JS로 구현 |
| JavaScript 구문 | 통과 | Node --check 및 실제 브라우저 실행 |
| 키보드·움직임 최소화 | 구현·부분 검증 | native dialog 포커스 및 Escape 확인; prefers-reduced-motion CSS 정적 확인 |
| 별도 미리보기 호스팅 | 배포 성공 | GitHub Pages와 별도, 소유자 로그인 필요 |
| GitHub 새 저장소 | 확인 | chloeisLovely/my-xr-universe, public, main |
| GitHub Pages 기존 버전 | 배포 성공 | 공개 페이지와 프로젝트 상세창·테마 확인 |

모바일은 브라우저 iframe 너비 검증이며 실제 iOS·Android 기기 테스트는 아닙니다. Safari·Firefox는 별도 검사하지 않았습니다. 브라우저 확장 자체 로그는 사이트 코드 오류로 분류하지 않았습니다.

ZIP은 루트의 index.html을 기존 저장소에 올리는 구조입니다. 실제 GitHub Pages 성공 여부는 저장소 파일 등록과 구분합니다.

## 디자인 3종 확장 검증
- Cosmos / Creative Studio / Next Level: 독립 단일 HTML, 동일한 MY_PROFILE 6개 항목.
- Studio·Next Level: 320px iframe에서 가로 넘침 없음, 상세창 열기·닫기 확인.
- Gallery: 390px iframe에서 가로 넘침 없음, 3개 미리보기 화면 렌더링 확인.
- 기존 홈: 768px iframe에서 장식 넘침 보정 후 가로 넘침 없음.
- Studio의 포레스트 테마, Next Level의 핑크 테마 전환 확인.
- 전체 HTML의 JavaScript 구문과 로컬 링크 대상 검증.
- 다운로드 링크는 동일 출처 HTML을 index.html로 저장하도록 구성. 원격 브라우저의 다운로드 이벤트 대기 검사는 시간 초과되어 파일 저장 완료는 확인하지 못함.
- 모바일은 iframe 너비 검사이며 실제 휴대전화 OS 검사는 아님.
