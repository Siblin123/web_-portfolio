//===================변수========================
let all_Category_deco = document.querySelectorAll(".category-deco");
let card_details = document.querySelectorAll(".details");
let View_details = document.querySelector(".View-details");
let all_Card = document.querySelectorAll(".card");
let overlay = document.querySelector(".overlay");
let side_bar_Pc = document.querySelector(".PC");
let side_bar_Mobile = document.querySelector(".Mobile");
let fa_xmark = document.querySelectorAll(".fa-xmark");//x버튼
let details = document.querySelectorAll(".details");//카드의 상세보기 버튼
//====================카테고리 =========================================
all_Category_deco.forEach(Category => {
  // 마우스를 올렸을 때 (hover)
  Category.addEventListener("mouseenter", (e) => {
    // 여기에 hover 시 실행할 코드 작성
    console.log("hover");
  });

  // 클릭했을 때
  Category.addEventListener("click", (e) => {
    // 여기에 클릭 시 실행할 코드 작성
    e.preventDefault();

    //카테고리 색상 변경
    for (let i = 0; i < all_Category_deco.length; i++) {
      if (all_Category_deco[i] != Category) {
        all_Category_deco[i].classList.remove("active");
      }
      else {
        all_Category_deco[i].classList.add("active");

      }
    }

    //데이터 불러오기
    for (let i = 0; i < all_Card.length; i++) {
      console.log(all_Card[i].getAttribute("data-isTeam") + "@" + Category.getAttribute("data-isTeam"));

      if (Category.getAttribute("data-isTeam") == "ALL") {
        all_Card[i].style.display = "block";
        continue;
      }


      if (all_Card[i].getAttribute("data-isTeam") == Category.getAttribute("data-isTeam")) {
        all_Card[i].style.display = "block"
      }
      else {
        all_Card[i].style.display = "none"

      }
    }
  });
});


//=============================상세보기 ====================================
card_details.forEach(detail => {
  detail.addEventListener("click", (e) => {


    e.preventDefault();
    View_details.classList.add("active");
    overlay.classList.add("active");

    openDetails();


  })
})

fa_xmark.forEach(xBtn => {
  xBtn.addEventListener("click", () => {
    closeDetails();
  });
});

function closeDetails() {
  side_bar_Pc.style.display = "none";
  side_bar_Mobile.style.display = "none";
  View_details.classList.remove("active");
  overlay.classList.remove("active");
}

function openDetails() {
  let windowWidth = window.innerWidth;

  if (windowWidth > 500) {
    side_bar_Pc.style.display = "flex";
    side_bar_Mobile.style.display = "none";
  } else {
    side_bar_Pc.style.display = "none";
    side_bar_Mobile.style.display = "flex";
  }

  View_details.classList.add("active");
  overlay.classList.add("active");
}




//============================= 상세 보기 데이터 연결===================================
details.forEach(detail => {
  detail.addEventListener("click", (e) => {
    e.preventDefault();
    const data = portfolo_data;

    for (let i = 0; i < data.length; i++) {
      if (detail.getAttribute("data-title") == data[i].title_) {
        document.querySelector(".details-title").innerText = data[i].title_;
        document.querySelector(".work-period p").innerText = data[i].date_;
        document.querySelector(".use-program p").innerText = data[i].use_program;
        document.querySelector(".part p").innerHTML = data[i].part;
        document.querySelector(".sample_Image img").src = data[i].img_;
        document.querySelector(".view-Demo a").href = data[i].href;
        console.log("동일한게 있음");
        break;
      }
    }



  });
});