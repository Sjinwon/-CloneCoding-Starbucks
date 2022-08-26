//돋보기 버튼----------------------------------------------
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

//포커스가 들어가면 class .focused추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//포커스가 나가면 class .focused제거
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//main visual 이미지 순차적으로 등장
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});


// 뱃지와 탑버튼------------------------------------------
const badgeEl = document.querySelector('.bagtges');
const toTopEl = document.getElementById('to-top');

/* 
document = html
window = 브라우저 창
 */
// window.addEventListener('scroll',function(){
//   console.log('scroll!');
// });

//lodash 설치 후
//lodash 문법 : _.throttle(함수, 시간밀리초)

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // console.log('scroll!');
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// -------------------------------------------------------

// 플로팅 이미지
//gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y : size,
    repeat : -1 , //몇 번 반복할지 설정, -1 무한반복
    yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 반복
    ease : Power1.easeInOut , //gsap easing
    delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

//프로모션 슬라이드------------------
new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    // 페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
  },
});

//프로모션 슬라이드 toggle btn---------------------------------------------
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

//footer 해마다 년도가 자동으로 변경
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

//Scroll Magic------------------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
