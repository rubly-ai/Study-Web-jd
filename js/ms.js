window.addEventListener("load", function () {
  var sz = document.querySelector("#sz");
  var fz = document.querySelector("#fz");
  var mz = document.querySelector("#mz");
  var inputtime = +new Date("2020-8-10,00:00:00");
  time(); //先调用一次，防止有空白
  setInterval(time, 1000);
  function time(time) {
    var nowtime = +new Date();
    var timer = (inputtime - nowtime) / 1000;
    var h = parseInt((timer / 60 / 60) % 24);
    h = h < 10 ? "0" + h : h;
    sz.innerHTML = h;
    var m = parseInt((timer / 60) % 60);
    m = m < 10 ? "0" + m : m;
    fz.innerHTML = m;
    var s = parseInt(timer % 60);
    s = s < 10 ? "0" + s : s;
    mz.innerHTML = s;
  }
});
