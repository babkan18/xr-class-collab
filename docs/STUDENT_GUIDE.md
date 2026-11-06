# MY XR UNIVERSE — 50분 실습 가이드

오늘의 목표: 나만의 포트폴리오를 만들고, 변경 기록을 남기고, 공개 주소로 친구에게 보여주기.

## 시작 전
- GitHub 계정 로그인과 이메일 인증을 완료합니다.
- 1교시에 만든 공개 저장소 `my-xr-universe`를 사용합니다. 개인 저장소를 또 만들지 않습니다.
- 아직 저장소가 없다면 GitHub의 New repository에서 `my-xr-universe`, Public, Add a README로 생성합니다.
- 실명, 전화번호, 개인 이메일, 학생번호를 넣지 않습니다. 닉네임과 공개할 작품 정보만 사용합니다.
- 기본 파일은 ZIP 루트의 `index.html` 하나입니다. 더블클릭으로 브라우저에서 미리 볼 수 있습니다.

## 0–5분 · 완성 화면 둘러보기
강사 예시에서 프로젝트 상세창과 테마 버튼을 눌러 봅니다. 예시는 완성 작품이 아니라 앞으로 만들고 싶은 프로젝트입니다.

## 5–10분 · 내 저장소에 추가하기
1. ZIP 압축을 풉니다. ZIP 자체를 GitHub에 올리지 않습니다.
2. 기존 `my-xr-universe` 저장소 → Add file → Upload files.
3. ZIP 루트의 `index.html`을 업로드합니다. `student/` 폴더째 올리지 않습니다.
4. `Add XR portfolio template` 메시지로 Commit changes.
5. Code 탭에서 README.md와 같은 위치에 소문자 `index.html`이 있는지 확인합니다.

## 10–20분 · 나의 정보 6개 수정
저장소의 `index.html` → 연필 아이콘으로 편집합니다. 맨 위 `MY_PROFILE`만 수정합니다.

| 번호 | 코드 | 수정 예시 |
|---|---|---|
| ① | nickname | `"ORBIT"` |
| ② | tagline | `"현실에 새로운 경험을 더하는 AR 크리에이터"` |
| ③ | focus | `"AR"` (`VR`, `AR`, `3D` 중 선택) |
| ④ | tech | `["Unity", "Blender", "Python"]` |
| ⑤ | project | title, description, status를 실제 상황에 맞게 수정 |
| ⑥ | githubUsername | GitHub 아이디만 입력. `https://`를 넣지 않기 |

문자열을 감싼 따옴표, 항목 사이 쉼표, 중괄호·대괄호를 지우지 않습니다. 문자열 안에서 큰따옴표가 필요하면 `\"`로 씁니다. `</script>` 같은 HTML 종료 태그는 자기소개에 넣지 않습니다.

GitHub 사용자명이 미설정이면 버튼은 잘못된 주소를 열지 않고 안내를 표시합니다. 유효한 형식의 아이디는 링크로 연결되지만 계정·저장소의 실제 존재 여부를 자동 확인하지는 않습니다.

## 20–25분 · Commit과 History
- `Personalize nickname and project idea` 메시지로 Commit합니다.
- History에서 방금 Commit을 열고 바뀐 줄을 확인합니다.
- 친구에게 “어디를 왜 바꿨는지” 한 문장으로 설명합니다.

## 25–35분 · GitHub Pages 공개
1. 저장소 → Settings → Pages.
2. Build and deployment의 Source: **Deploy from a branch**.
3. Branch: **main**, 폴더: **/(root)** → Save.
4. Actions에서 Pages 관련 실행 결과가 성공했는지 확인합니다.
5. Settings → Pages에 표시되는 실제 사이트 주소를 엽니다. 배포는 즉시 끝나지 않을 수 있습니다.

일반적인 프로젝트 사이트 주소 형식은 `https://사용자명.github.io/my-xr-universe/`입니다. 주소를 추측하기보다 Pages에 표시된 실제 주소를 복사하세요. 이 자료의 미리보기 배포와 학생의 GitHub Pages 배포는 별개입니다.

## 35–45분 · 수정하고 다시 공개
- tagline 또는 프로젝트 제목을 변경하고 `Improve portfolio introduction`으로 Commit합니다.
- Actions 성공 후 사이트를 새로 고칩니다. 이전 내용이면 강력 새로고침을 시도합니다.
- 테마 버튼은 해당 브라우저에만 선택을 저장합니다. 다른 사람에게도 기본 색상을 바꾸려면 `:root`의 `--accent`, `--violet`, `--glow`를 수정하고 Commit합니다.

## 45–50분 · 공유와 확인
- 친구에게 사이트 주소를 보내고 서로 접속합니다.
- 휴대전화에서 메뉴와 프로젝트 상세창을 확인합니다.
- GitHub 버튼과 ‘이 저장소 보기’ 버튼이 자신의 계정·저장소로 연결되는지 확인합니다.
- 기본 이름과 문구가 남아 있지 않은지 확인합니다.

## 미션 단계
필수: 닉네임·소개·프로젝트 수정 → Commit → Pages 배포.
도전: 관심 기술 3개·관심 분야 수정 → 변경 이력 설명.
보너스: 색상 변수 수정 → 두 번째·세 번째 프로젝트 수정 → 실제 성장 기록 추가.

성장 타임라인의 `PLAN`은 계획입니다. 실제 수행한 뒤에만 `DONE`이나 날짜로 바꿉니다. GitHub 활동 자동 연동은 아닙니다.

## 문제 해결
| 현상 | 확인할 것 |
|---|---|
| 404 | `index.html`이 소문자인지, main 루트에 있는지, Pages source와 Actions 성공 여부 |
| 화면은 나오지만 개인화가 안 됨 | MY_PROFILE의 따옴표·쉼표 오류, 브라우저 JavaScript 허용 여부 |
| 수정해도 그대로 | Commit이 main에 반영됐는지, Actions 완료 여부, 새로고침 |
| GitHub 버튼 안내만 표시 | ⑥ 사용자명에서 예시 아이디를 바꿨는지 |
| 저장소 링크 404 | 저장소 이름이 `my-xr-universe`인지. 다르면 코드의 REPOSITORY_NAME도 변경 |
| 테마가 예시와 다름 | 같은 브라우저의 테마 저장 때문. 상단 ◐ 버튼으로 순환 |
| CSS/JS 분리본이 안 됨 | advanced 폴더의 4개 파일을 함께 복사했는지. 초급은 단일 index.html 사용 |

## 공식 문서
확인일: 2026-11-06. 화면 명칭은 GitHub 변경에 따라 달라질 수 있습니다.
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites
