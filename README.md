![](https://capsule-render.vercel.app/api?type=waving&height=300&color=0:F8B195,50:F67280,100:F67280&text=Pokemon%20Dex&desc=내일배움캠프%20개인과제&descAlignY=53&fontAlignY=35&fontColor=ffffff&fontAlign=50)
<br/>
<br/>

# Pokemon Dex

포켓몬들의 정보를 확인하고 나만의 팀을 꾸려보세요!
<br/>
<br/>

## 🌟 배포 링크

[Pokemon Dex](https://pokemon-pjh.vercel.app/)
<br/>
<br/>

## 📚 프로젝트 구조

```
📦pokemon
 ┣ 📂public
 ┃ ┗ 📂icon
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Dashboard.jsx
 ┃ ┃ ┗ 📜PokemonCard.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Dex.jsx
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜PokemonDetail.jsx
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜configStore.js
 ┃ ┃ ┗ 📂modules
 ┃ ┃ ┃ ┗ 📜myPokemon.js
 ┃ ┣ 📂setData
 ┃ ┃ ┣ 📜TypeColor.jsx
 ┃ ┃ ┗ 📜TypeIcon.jsx
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Router.jsx
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜main.jsx
 ┃ ┗ 📜mock.js
 ┣ 📜.env
 ┣ 📜index.html
```

<br/>

## ⚒️ 개발 환경

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<br/>
<br/>

# 📆프로젝트 기간

24.08.16 ~ 24.08.27

<br/>
<br/>

# 🎨 주요 기능

## 1️⃣ 나만의 포켓몬 추가

![add-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/47df17aa-1529-4048-9928-5b6ccdc326fb)

목록에서 **포켓볼**을 클릭하게되면, 해당 포켓몬이 상단의 **나만의 포켓몬** 영역에 등록되게 됩니다.

최대 6마리까지 등록 가능하며, 동일 포켓몬 등록 or 6마리 초과 등록시 error 메시지가 출력됩니다.

<br/>

## 2️⃣ 나만의 포켓몬 삭제

![del-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/11e65e22-d983-4328-9356-d87053692c4e)

**놓아주기** 버튼을 클릭하시게 되면, **confirm** 창이 노출이 됩니다.
confirm창에서 **확인** 버튼을 클릭하시면 비로소 나만의 포켓몬 영역에서 해당 포켓몬이 **삭제**됩니다.

<br/>

## 3️⃣ 상세페이지 이동

![detail-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d3a43e49-cc82-429c-b61e-8c9e5a2f530b)

목록에서 포켓몬의 이미지를 클릭하시면 해당 포켓몬의 상세페이지로 이동됩니다.<br/>

**좌/우 버튼**을 통하여 이전/다음 포켓몬을 확인 하실 수 있으며,<br/>
**추가 / 삭제** 또한 상세페이지에서 가능합니다.

마지막으로 **[목록으로 돌아가기]** 버튼을 클릭하시면 다시 목록 페이지로 이동됩니다.

<br/>
<br/>

# 🎢 개발 과정

[개인프로젝트-포켓몬 도감(1)](https://velog.io/@sjrmd781/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%901)

[개인프로젝트-포켓몬 도감(2)](https://velog.io/@sjrmd781/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%902)

[개인프로젝트-포켓몬 도감(3)](https://velog.io/@sjrmd781/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%903)

[개인프로젝트-포켓몬 도감(4)](https://velog.io/@sjrmd781/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%904)

<br/>
<br/>

# 💭 회고

**Good**👍  
단계별로 branch를 파고 작업을 진행을 하니까, props-drilling에서 context api, redux로 리팩토링을 해줬을 때 어떻게 변화가 되는지 다시 확인인하고 비교 해 볼 수 있어서 좋았던 것 같다.

**Bad**🥲  
Redux를 이용하는 과정에서는 많은 어려움을 느꼈고, 문제를 해결하기 위해 GPT를 이용했던 점이 많이 아쉬움으로 남는다.

그래도 직접 구현 해보면서 어떻게 관리가 되는지 확인을 해볼 수 있던점은 좋았던 것 같다.

이디액타페써스!!
