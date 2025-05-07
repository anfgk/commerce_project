// header.html 파일을 비동기적으로 로드하여 #header 요소에 삽입하는 함수
const headerLoad = () => {
  const header = document.querySelector("#header");

  // header.html 파일을 fetch로 불러오기
  fetch("../../html/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      // header 요소에 불러온 HTML 삽입
      header.innerHTML = data;

      // 스크롤 시 헤더 숨김/보임 처리 함수
      const headerScrollEvt = () => {
        let lastScrollY = window.scrollY;
        const nav = document.querySelector("nav");
        const threshold = 100;
        let isHeaderHidden = false;
        let isScrollingDown = false;

        const handleScroll = () => {
          const currentScrollY = window.scrollY;

          // 일정 거리 이상 스크롤한 경우에만 동작
          if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
            if (currentScrollY > lastScrollY && !isScrollingDown) {
              // 아래로 스크롤 시 nav에 active 클래스 추가 (헤더 숨김)
              nav.classList.add("active");
              isHeaderHidden = true;
              isScrollingDown = true;
            } else if (currentScrollY < lastScrollY && isScrollingDown) {
              // 위로 스크롤 시 active 클래스 제거 (헤더 보임)
              nav.classList.remove("active");
              isHeaderHidden = false;
              isScrollingDown = false;
            }
            lastScrollY = currentScrollY;
          }
        };

        // 스크롤 이벤트를 requestAnimationFrame을 사용해 최적화
        window.addEventListener("scroll", () => {
          window.requestAnimationFrame(handleScroll);
        });
      };
      headerScrollEvt();

      // 상단 롤링 배너 구현 함수
      const headerRollingEvt = () => {
        const rollingBanner = () => {
          const prev = document.querySelector(".header-top__prev");
          prev.classList.remove("header-top__prev");

          const current = document.querySelector(".header-top__current");
          current.classList.remove("header-top__current");
          current.classList.add("header-top__prev");

          const nextItem = document.querySelector(".header-top__next");

          // 다음 항목이 없으면 첫 번째 항목을 next로 지정
          if (nextItem.nextElementSibling == null) {
            const firstItem = document.querySelector(
              ".header-top ul li:first-child"
            );
            firstItem.classList.add("header-top__next");
          } else {
            // 다음 항목이 있다면 next 클래스를 이동
            nextItem.nextElementSibling.classList.add("header-top__next");
          }

          nextItem.classList.remove("header-top__next");
          nextItem.classList.add("header-top__current");
        };

        // 5초마다 롤링 실행
        let interval = setInterval(rollingBanner, 5000);

        // 마우스 호버 시 롤링 멈추고, 벗어나면 재시작
        const items = document.querySelectorAll(".header-top ul li");
        items.forEach((item) => {
          item.addEventListener("mouseover", () => {
            clearInterval(interval);
          });
          item.addEventListener("mouseout", () => {
            interval = setInterval(rollingBanner, 5000);
          });
        });
      };
      headerRollingEvt();

      // 모바일 오버플로우 메뉴 스크롤 이벤트
      const hashContent = document.querySelector(".mobile-menu");
      const listClientWidth = hashContent.clientWidth;
      const listScollWidth = hashContent.clientWidth + 200;

      let startX = 0;
      let nowX = 0;
      let endX = 0;
      let listX = 0;

      const getClientX = (e) => {
        return e.touches ? e.touches[0].clientX : e.clientX;
      };

      // 현재 translateX 값 가져오기
      const getTranslateX = () => {
        return parseInt(
          getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
        );
      };

      // translateX 적용 함수
      const setTranslateX = (x) => {
        hashContent.style.transform = `translateX(${x}px)`;
      };

      // 드래그 중 처리
      const onScrollMove = (e) => {
        nowX = getClientX(e);
        setTranslateX(listX + nowX - startX);
      };

      // 드래그 종료 후 처리 (좌우 경계 제한)
      const onScrollEnd = (e) => {
        endX = getClientX(e);
        listX = getTranslateX();

        if (listX > 0) {
          setTranslateX(0);
          hashContent.style.transition = `all 0.1s ease`;
          listX = 0;
        } else if (listX < listClientWidth - listScollWidth) {
          setTranslateX(listClientWidth - listScollWidth);
          hashContent.style.transition = `all 0.1s ease`;
          listX = listClientWidth - listScollWidth;
        }

        // 이벤트 제거
        window.removeEventListener("touchstart", onScrollStart);
        window.removeEventListener("mousedown", onScrollStart);
        window.removeEventListener("touchmove", onScrollMove);
        window.removeEventListener("mousemove", onScrollMove);
        window.removeEventListener("touchend", onScrollEnd);
        window.removeEventListener("mouseup", onScrollEnd);
      };

      // 드래그 시작 시점 처리
      const onScrollStart = (e) => {
        startX = getClientX(e);

        window.addEventListener("touchmove", onScrollMove);
        window.addEventListener("mousemove", onScrollMove);
        window.addEventListener("touchend", onScrollEnd);
        window.addEventListener("mouseup", onScrollEnd);
      };

      // 모바일 메뉴에 드래그 이벤트 등록
      hashContent.addEventListener("touchstart", onScrollStart);
      hashContent.addEventListener("mousedown", onScrollStart);
    })
    // 에러 발생 시 콘솔 출력
    .catch((error) => console.error("Error loading header:", error));
};

// header 삽입 및 관련 이벤트 초기화 함수 호출
headerLoad();
