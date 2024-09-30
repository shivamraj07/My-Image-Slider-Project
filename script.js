let left = document.querySelector(".left");
let right = document.querySelector(".right");
let imgslider = document.querySelector(".img-slider");
let img = document.querySelectorAll(".image");
let containerFooter = document.querySelector(".container-footer");

let query1 = window.matchMedia("(min-width:768px)");
let query2 = window.matchMedia("(max-width:768px)");
let imgNumber = 1;

//dots functionality

for (let i = 0; i < img.length; i++) {
  let container = document.createElement("div");
  container.className = "dots";
  containerFooter.appendChild(container);
}

let dotButtons = document.querySelectorAll(".dots");
dotButtons[0].style.backgroundColor = "black";

let changeDots = () => {
  dotButtons.forEach((dots) => {
    dots.style.backgroundColor = "transparent";
    dots.addEventListener("mouseover", stopAutoImageSlider);
    dots.addEventListener("mouseout", autoImageSlider);
  });
};

dotButtons.forEach((dots, i) => {
  dots.addEventListener("click", () => {
    changeDots();
    imgslider.style.transform = `translateX(-${i * 600}px)`;
    imgNumber = i + 1;
    dots.style.backgroundColor = "black";
  });
});

let changeDotColor = () => {
  changeDots();
  dotButtons[imgNumber - 1].style.backgroundColor = "black";
};

//arrow functionality

right.addEventListener("click", () => {
  if (imgNumber < img.length && query2.matches) {
    imgslider.style.transform = `translateX(-${imgNumber * 200}px)`;
    imgNumber++;
  } else if (imgNumber < img.length && query1.matches) {
    imgslider.style.transform = `translateX(-${imgNumber * 600}px)`;
    imgNumber++;
  } else {
    imgslider.style.transform = `translateX(0px)`;
    imgNumber = 1;
  }
  changeDotColor();
});

left.addEventListener("click", () => {
  if (imgNumber > 1 && query2.matches) {
    imgslider.style.transform = `translateX(-${(imgNumber - 2) * 200}px)`;
    imgNumber--;
  } else if (imgNumber > 1 && query1.matches) {
    imgslider.style.transform = `translateX(-${(imgNumber - 2) * 600}px)`;
    imgNumber--;
  } else {
    imgslider.style.transform = `translateX(0px)`;
    imgNumber = img.length + 1;
  }
  changeDotColor();
});

//Auto slider

let slideShow;

let autoImageSlider = () => {
  slideShow = setInterval(() => {
    if (imgNumber < img.length && query2.matches) {
      imgslider.style.transform = `translateX(-${imgNumber * 200}px)`;
      imgNumber++;
    } else if (imgNumber < img.length && query1.matches) {
      imgslider.style.transform = `translateX(-${imgNumber * 600}px)`;
      imgNumber++;
    } else {
      imgslider.style.transform = `translateX(0px)`;
      imgNumber = 1;
    }
    changeDotColor();
  }, 2000);
};

let stopAutoImageSlider = () => {
  clearInterval(slideShow);
};
autoImageSlider();

imgslider.addEventListener("mouseover", stopAutoImageSlider);
imgslider.addEventListener("mouseout", autoImageSlider);

left.addEventListener("mouseover", stopAutoImageSlider);
left.addEventListener("mouseout", autoImageSlider);

right.addEventListener("mouseover", stopAutoImageSlider);
right.addEventListener("mouseout", autoImageSlider);
