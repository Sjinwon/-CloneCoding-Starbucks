[![Starbucks](./favicon.ico)](https://sjinwon.github.io/-CloneCoding-Starbucks/)

# Starbucks CloneCoding

### 제작기간 : 5일

### 사용언어 : html css javasctript

<br>

## ✔ <strong>검색 최적화</strong>를 위한 오픈그래프(The Open Graph protocol)
웹 페이지가 `소셜 미디어(페이스북 등)`에 공유될 때 우선적으로 활용되는 정보를 지정한다.

```
og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
```

<br>

## ✔ SEO (검색엔진 최적화, Search Engine Optimization) 
구글이나 네이버 등에 자신의 웹 사이트/페이지를 노출할 수 있도록 정보를 최적화하는 작업을 말한다.

``` html
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
```

<br>

## ✔ Google fonts 
페이지에서 사용할 '나눔 고딕'폰트를 지정한다.

``` html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

<br>

## ✔ Google Material Icons
구글 머터리얼 아이콘을 사용했다.

- main.css보다 먼저 읽혀 들어갈 수 있도록 위에다가 선언한다.

``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

- 사용할 부분에는 다음과 같이 사용한다.

``` html
<div class="material-icons">upload</div>
```

<br>

## ✔ Lodash를 활용하여 scroll 함수 제어하기
scroll 이벤트가 계속 실행되면 사이트가 무거워 질 수 있으므로 이런 부분을 제어 할 수 있는 플러그인인 lodash 활용

``` html
  <!-- lodash 스크롤 함수 제어 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

<br>

## ✔ Gsap을 이용해 애니메이션 효과 주기
GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

<br>

## ✔ Youtube API
Iframe Player API를 통해 youtube 동영상을 제어할 수 있다.

- 유튜브 영상이 출력될 위치에 요소를 지정(생성)한다.

``` javascript
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```
- onYouTubePlayerAPIReady 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!
그리고 함수는 전역(Global) 등록해야 합니다!

- 플레이어 매개변수(playerVars)에서 더 많은 옵션을 확인할 수 있습니다.

``` javascript
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

<br>

## ✔ 랜덤한 숫자를 생성하는 함수

``` javascript
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
```

<br>

## ✔ ScrollMagic
ScrollMagic은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용한다.


``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

``` javascript
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

<br>

## ✔ Swiper Slide
스타벅스 프로모션 버튼을 누르면 나오는 슬라이드와 푸터영역에 있는 Awards 영역을 Swiper slider를 사용했다.


``` html
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

``` html
<!-- Slider main container -->
<!-- Swiper Slider -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <a href="javascript:void(0)">크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:void(0)">[당첨자 발표] 2022 스타벅스 플래너 영수증 이벤트</a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:void(0)">스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:void(0)">[당첨자 발표] 뉴이어 전자영수증 이벤트</a>
      </div>
    </div>
  </div>
```

``` javascript
//1.버튼을 누르면 프로모션영역이 접혔다 펼쳤다 할수있는 영역을 변수로 할당
const promotionEl = document.querySelector('.promotion');

//2.프로모션 토글버튼을 변수로 할당
const promotionToggleBtn = document.querySelector('.toggle-promotion');

//3. 토글의 기능을 위해서 슬라이드 영역의 숨김 여부 기본값 변수로 할당
let isHidePromotion = false;

//토글버튼을 클릭하면
promotionToggleBtn.addEventListener('click', function(){
  //슬라이드 영역 숨김 여부를 반대값으로 할당
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});
```

``` javascript
// AWARDS Swiper slider
new Swiper(".awards .swiper", {
  direction: "horizontal",
  slidesPerView: 5, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  loop: true, //무한반복설정
  autoplay: true, //자동실행
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".awards .swiper-prev", // 이전 버튼 선택자
    nextEl: ".awards .swiper-next", // 다음 버튼 선택자
  },
});
```

<br>

## ✔ 출처에 있는 년도 해마다 자동으로 반영하기

``` html
<p>&copy;<span class="this-year"></span> Starbucks Coffee Company. All Rights Reserved.</p>
```

``` javascript
//footer 해마다 년도가 자동으로 변경
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
```