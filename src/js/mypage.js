// 모든 "my-order" 클래스 요소를 선택
const titles = document.querySelectorAll(".my-order");

// 각 "my-order" 요소에 클릭 이벤트 리스너 추가
titles.forEach((title) => {
  title.addEventListener("click", () => {
    // 클릭된 "my-order" 요소의 아이콘(i) 선택
    const orderIcon = document.querySelector(".leftmenu ul > .my-order > i");

    // "inner" 클래스 요소 내 "ul" 요소 선택
    const df = document.querySelector(".inner > ul");

    // "ul" 요소와 아이콘(i) 요소에 "active" 클래스 토글
    df.classList.toggle("active");
    orderIcon.classList.toggle("active");

    // 콘솔에 아이콘 요소 출력 (디버깅용)
    console.log(orderIcon);
  });
});
