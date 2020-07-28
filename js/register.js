window.addEventListener("load", function () {
  var ipt = document.querySelector("#ipt");
  var btn = document.querySelector("#btn");
  var time = 60;
  btn.addEventListener("click", function () {
    if (ipt.value == "" || ipt.value.length < 6) {
      alert("请确认验证码正确");
      return false;
    } else {
      btn.disabled = true;
      var timer = setInterval(function () {
        if (time == 0) {
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = " 发送";
          time = 60;
        } else {
          btn.innerHTML = "请在" + time + "秒后重新尝试";
          time--;
        }
      }, 1000);
    }
  });
});
