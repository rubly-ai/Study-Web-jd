window.addEventListener("load", function () {
  var pwd = document.querySelector("#pwd");
  var eye = document.querySelector("#eye");
  var flag = 0;
  eye.addEventListener("click", function () {
    if (flag == 0) {
      eye.src = "images/open.png";
      pwd.type = "text";
      flag = 1;
    } else {
      eye.src = "images/close.png";
      pwd.type = "password";
      flag = 0;
    }
  });
});
