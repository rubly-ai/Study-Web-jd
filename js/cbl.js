window.addEventListener("load", function () {
  var ul = document.querySelector(".tab-cb");
  var db = document.querySelector("#db");
  document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 800) {
      ul.style.position = "fixed";
      ul.style.right = 0;
      ul.style.top = "200px";
      ul.style.height = "200px";
      db.style.display = "block";
    } else {
      ul.style.position = "absolute";
      ul.style.top = "771px";
      ul.style.right = 0;
      db.style.display = "none";
      ul.style.height = "150px";
    }
  });
});
