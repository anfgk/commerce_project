// 리뷰 작성 탭 요소 선택
const reviewPage = document.querySelector("#menuRiview");

// 리뷰 완료 탭 요소 선택
const reviewCompletePage = document.querySelector("#menuRiveiwComplete");

console.log("hi"); // 페이지 로드 확인용 로그

// 리뷰 작성 탭 클릭 시 콘솔에 "click" 출력
reviewPage.addEventListener("click", () => {
  console.log("click");
});

// 리뷰 완료 탭 클릭 시 콘솔에 "click" 출력
reviewCompletePage.addEventListener("click", () => {
  console.log("click");
});
