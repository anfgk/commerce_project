// product-list.html 파일을 로드하여 #product-list 안에 삽입하는 함수
const productListLoad = () => {
  // #product-list 요소를 선택하여 변수에 저장
  const productList = document.getElementById("product-list");

  // product-list.html 파일을 비동기적으로 로드
  fetch("../../html/components/product-list.html")
    .then((response) => response.text()) // 응답을 텍스트 형식으로 변환
    .then((data) => {
      // 로드한 HTML 데이터를 #product-list 요소에 삽입
      productList.innerHTML = data;

      // 로드된 데이터를 콘솔에 출력 (디버깅용)
      console.log(data);
    })
    .catch((error) => {
      // 오류가 발생한 경우 콘솔에 오류 메시지 출력
      console.error("Error loading header:", error);
    });
};

// productListLoad 함수 호출하여 데이터 로드 시작
productListLoad();

// createDetail 변수에 대한 콘솔 로그 (변수 정의나 내용이 없다면 출력되지 않음)
console.log(createDetail);
