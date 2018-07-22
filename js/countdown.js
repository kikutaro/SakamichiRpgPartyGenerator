var countDownDate = new Date("July 22, 2018 17:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "乃木坂46 真夏の全国ツアー2018 福岡ヤフオク!ドーム＆欅共和国2018<br>" + days + "日 " + hours + "時間 "
  + minutes + "分 " + seconds + "秒 ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "乃木坂46 真夏の全国ツアー2018 福岡ヤフオク!ドーム＆欅共和国2018 ライブ開始中！";
  }
}, 1000);