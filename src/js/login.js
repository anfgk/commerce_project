// 로컬스토리지에서 사용자 아이디 확인
const checkIdBtn = document.querySelector("#open"); // 아이디 확인 버튼 요소 선택
checkIdBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 폼 기본 제출 방지
  const enteredId = document.getElementById("email").value; // 입력된 아이디 값 가져오기
  const users = JSON.parse(localStorage.getItem("users")) || []; // 로컬스토리지에서 users 데이터 가져오기
  const foundUser = users.find((user) => user.id === enteredId); // 아이디가 일치하는 사용자 찾기

  if (foundUser) {
    // 아이디가 존재하면 비밀번호 입력창 보여주고 이메일 입력창 숨기기
    document.querySelector(".password").style.display = "block";
    document.querySelector(".email").style.display = "none";
  } else {
    // 아이디가 존재하지 않으면 경고창 표시
    alert("아이디가 존재하지 않습니다.");
  }
});

// 입력된 비밀번호 확인
const checkPwBtn = document.querySelector("#close"); // 비밀번호 확인 버튼 요소 선택
checkPwBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 폼 기본 제출 방지
  const enteredPw = document.getElementById("password").value; // 입력된 비밀번호 값 가져오기
  const users = JSON.parse(localStorage.getItem("users")) || []; // 로컬스토리지에서 users 데이터 가져오기
  const foundUser = users.find((user) => user.password === enteredPw); // 비밀번호가 일치하는 사용자 찾기

  if (foundUser) {
    // 비밀번호가 일치하면 메인 페이지로 이동
    window.location.href = "/index.html";
  } else {
    // 비밀번호 불일치 시 경고 및 입력창 숨김 처리
    alert("아이디와 비밀번호가 일치하지 않습니다.");
    document.querySelector(".password").style.display = "none";
    document.querySelector(".email").style.display = "none";
  }
});
