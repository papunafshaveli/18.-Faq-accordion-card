const btn = document.querySelectorAll(".question");
const arrowbtn = document.querySelectorAll(".arrow");
btn.forEach(function (question) {
  question.addEventListener("click", function () {
    let someanswer = document.querySelectorAll(".someanswer");
    someanswer.forEach(function (elem) {
      if (question.nextElementSibling != elem)
        elem.classList.remove("someanswer");
    });
    question.nextElementSibling.classList.toggle("someanswer");

    question.classList.toggle("somebold");

    arrowbtn.forEach(function (arrow) {
      arrow.classList.toggle("someimage");
    });
  });
});
