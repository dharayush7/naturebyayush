function is_touch_device() {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (is_touch_device() != true) {
  // card hover

  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseenter", () => {
      card[i].classList.add("hover1");
    });
    card[i].addEventListener("mouseleave", () => {
      card[i].classList.remove("hover1");
    });
  }

  // email  hover

  const email = document.querySelectorAll(".email");
  for (let i = 0; i < email.length; i++) {
    email[i].addEventListener("mouseenter", () => {
      email[i].classList.add("hover2");
    });
    email[i].addEventListener("mouseleave", () => {
      email[i].classList.remove("hover2");
    });
  }

  // github hover

  const github = document.querySelectorAll(".github");
  for (let i = 0; i < github.length; i++) {
    github[i].addEventListener("mouseenter", () => {
      github[i].classList.add("hover2");
    });
    github[i].addEventListener("mouseleave", () => {
      github[i].classList.remove("hover2");
    });
  }

  // footer hover

  const footer = document.querySelectorAll(".img");
  for (let i = 0; i < footer.length; i++) {
    footer[i].classList.add("filter");
  }
  for (let i = 0; i < footer.length; i++) {
    footer[i].addEventListener("mouseenter", () => {
      footer[i].classList.add("hover3");
    });
    footer[i].addEventListener("mouseleave", () => {
      footer[i].classList.remove("hover3");
    });
  }
  // btn hover
  const btn = document.querySelector(".btn");
  const arw = document.querySelector(".arw");

  btn.addEventListener("mouseenter", () => {
    btn.classList.remove("btn_df");
    btn.classList.add("btn_hover");
    arw.classList.remove("arw_df");
    arw.classList.add("arw_hover_bottom");
    setTimeout(() => {
      arw.classList.remove("arw_hover_bottom");
      arw.classList.add("arw_hover_top");
    }, 300);
    setTimeout(() => {
      arw.classList.remove("arw_hover_top");
      arw.classList.add("arw_df");
    }, 600);
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.add("btn_df");
    btn.classList.remove("btn_hover");
  });
} else {
  const btn = document.querySelector(".btn");
  const arw = document.querySelector(".arw");
  setInterval(() => {
    arw.classList.remove("arw_df");
    arw.classList.add("arw_hover_bottom");
    setTimeout(() => {
      arw.classList.remove("arw_hover_bottom");
      arw.classList.add("arw_hover_top");
    }, 300);
    setTimeout(() => {
      arw.classList.remove("arw_hover_top");
      arw.classList.add("arw_df");
    }, 600);
  }, 2000);
}

function btn_clc() {
  document.location.href = "./pages/python_page/python.html";
}

// header

const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 170) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

for (let index = 0; index < menu_item.length; index++) {
  menu_item[index].addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
}
