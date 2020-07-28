window.addEventListener("load", function () {
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");
  var focusWidth = focus.offsetWidth;
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    timer = setInterval(function () {
      arrow_r.click();
    }, 1000);
  });
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      // 当我们点击了某个小li 就拿到当前小li 的索引号
      var index = this.getAttribute("index");
      // 当我们点击了某个小li 就要把这个li 的索引号给 num
      num = index;
      // 当我们点击了某个小li 就要把这个li 的索引号给 circle
      circle = index;
      console.log(focusWidth);
      console.log(index);
      animate(ul, -index * focusWidth);
    });
  }
  ol.children[0].className = "current";
  var first = ul.children[0].cloneNode(true); //深克隆
  ul.appendChild(first);
  var num = 0;
  var circle = 0;
  // flag 节流阀
  var flag = true;
  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false; // 关闭节流阀

      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag = true; // 打开节流阀
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleChange();
    }
  });
  arrow_l.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + "px";
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
      circle--;
      circle = circle < 0 ? ol.children.length - 1 : circle;
      circleChange();
    }
  });
  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }
  var timer = setInterval(function () {
    arrow_r.click();
  }, 1000);
});
