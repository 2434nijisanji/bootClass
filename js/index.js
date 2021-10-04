function current_time()
{
    var nowDate = new Date();
    year = nowDate.getFullYear(); //回傳現在是幾年
    month = nowDate.getMonth();
    day = nowDate.getDate();
    hour = nowDate.getHours();
    min = nowDate.getMinutes();
    if(min <= 9)
    {
      var min = "0" + min
    }
    sec = nowDate.getSeconds();

    var suffix; //判斷是上午還是下午的功能
        if(hour >= 0 && hour < 12)
        {
            suffix = "上午";
        }else
        {
            suffix = "下午"; 
        }   
          document.getElementById("date").innerHTML = year + "年" + (month + 1) + "月" + day + "日 ";
          document.getElementById("time").innerHTML = suffix + " " + hour + "時 "+ min + "分 "+ sec + "秒";
    
    
    setTimeout('current_time()', 1000);
}

function TextEffect()
{
    var textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml14 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutExpo",
            duration: 900
        }).add({
            targets: '.ml14 .letter',
            opacity: [0, 1],
            translateX: [40, 0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 800,
            offset: '-=600',
            delay: (el, i) => 150 + 25 * i
        }).add({
            targets: '.ml14',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

window.onload = function () {
    current_time();
    TextEffect();
}