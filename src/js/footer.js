// footer.html 파일을 비동기적으로 로드하여 현재 문서의 #footer 요소 안에 삽입하는 함수
const footerLoad = () => {
  // id가 "footer"인 요소를 가져옴 (footer 삽입 위치)
  const productList = document.getElementById("footer");
  // footer HTML 파일을 가져옴
  fetch("../../html/components/footer.html")
    // 응답을 텍스트 형식으로 변환
    .then((response) => response.text())
    // 변환된 HTML 텍스트를 #footer 요소 안에 삽입
    .then((data) => {
      productList.innerHTML = data;
    })
    // 오류 발생 시 콘솔에 에러 메시지를 출력
    .catch((error) => console.error("Error loading footer:", error));
};
// 문서 로드 시 footer 삽입 함수 실행
footerLoad();
