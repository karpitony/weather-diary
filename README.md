# 🌤️ Weather Diary

- 한번 연습해봐야 멘토로서 도움을 주던 할거 같아서 연습해봤습니다.
- `styled-components`는 이제 유기됐고, css 귀찮아서... tailwind로 했습니다.
- 그 외에는 스택 동일합니다.



---

## 기존 README.md

> 오늘의 감정과 날씨를 함께 기록하는 클론 코딩 프로젝트  
> **React + styled-components + OpenWeather API + GitHub 협업 실습**

---

## 📌 프로젝트 목표

- React 프로젝트의 기본 구조와 흐름 이해
- Figma 디자인을 퍼블리싱하며 컴포넌트 분리 학습
- 공공 API(OpenWeather)를 활용한 날씨 연동 기능 구현
- GitHub 협업 흐름 (이슈 → 브랜치 → PR → 리뷰 → 병합) 실습

---

## 🛠 기술 스택

- React (with Vite)
- JavaScript (ES6+)
- styled-components
- React Router DOM
- OpenWeather API
- localStorage

---

## 📁 폴더 구조

```
📦 weather-diary/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── DiaryCard.jsx
│   │   └── WeatherBox.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Write.jsx
│   ├── hooks/
│   │   └── useWeather.js
│   ├── utils/
│   │   └── storage.js
│   ├── styles/
│   │   └── GlobalStyle.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── README.md
└── package.json
```

---

## 🧪 구현 기능

- [ ] 일기 작성, 수정, 삭제 (localStorage 활용)
- [ ] 오늘 날씨 자동 조회 (OpenWeather API)
- [ ] 간단한 필터 or 정렬 기능
- [ ] 반응형 UI (모바일 대응)

---

## 🔄 GitHub 협업 가이드

### ✅ 브랜치 전략

| 브랜치 명        | 설명                                          |
| ---------------- | --------------------------------------------- |
| `main`           | 최종 배포용 브랜치 (병합은 PR을 통해 진행)    |
| `dev`            | 기능 개발 통합 브랜치                         |
| `feature/기능명` | 각 기능별 작업 브랜치 (`feature/write-diary`) |
| `fix/버그명`     | 버그 수정용 브랜치 (`fix/weather-error`)      |

---

### 🧩 협업 흐름

1. **이슈 생성**  
   예: `일기 작성 기능 구현`, `날씨 API 연동`

2. **브랜치 생성**

   ```bash
   git checkout -b feature/write-diary
   ```

3. **기능 개발 & 커밋**

   ```bash
   git add .
   git commit -m "feat: 일기 작성 기능 추가"
   git push origin feature/write-diary
   ```

4. **PR 생성**

   - base: `dev`
   - compare: `feature/작성한 브랜치`
   - 팀원에게 코드 리뷰 요청

5. **리뷰 후 병합 (멘토 or 본인)**

---

## 🧪 설치 및 실행

```bash
git clone https://github.com/DguFarmSystem/4th-security-fe-b-study.git
cd weather-diary
npm install
npm run dev
```

---

## ☁️ 날씨 API 정보

- [OpenWeatherMap API](https://openweathermap.org/api)
- 무료 플랜 사용 가능
- `geolocation` API로 현재 위치 받아 연동 가능

---

## 📝 회고 작성 (7일차)

- 자신이 맡은 기능 정리
- 어려웠던 점과 해결 과정
- 협업 과정에서 배운 점

---

## ✅ 과제 완료 기준

- [ ] 최소 하나의 기능 구현 완료
- [ ] GitHub 이슈 생성 → 브랜치 작업 → PR 생성 → 리뷰 → 병합 경험
- [ ] 회고 정리 or README 작성

---

## 🙋🏻‍♀️ 도움말

- A팀 멘토에게 질문하거나 코드 리뷰를 요청하세요!
- 불확실할 땐 PR을 먼저 열고 코멘트로 도움을 요청해도 좋아요 :)

---
