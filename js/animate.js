function animate(obj, target, callback) {
  // 先清除以前的定时器，只保留当前的一个定时器执行
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 把我们步长值改为整数 不要出现小数的问题
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      // 停止动画
      clearInterval(obj.timer);
      callback && callback();
    }
    // 步长公式：(目标值 - 现在的位置) / 10
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
