window.addEventListener("load", function () {
  var item1 = document.querySelector("#item1-nav");
  var lis = item1.querySelectorAll("li");
  var tabs = document.querySelectorAll(".tab-con");
  for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute("index", i);
    lis[i].onmouseover = function () {
      var index = this.getAttribute("index");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      tabs[index].style.display = "block";
    };
  }
});
