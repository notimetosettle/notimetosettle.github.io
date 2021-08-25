var countDownDate = new Date("Dec 21, 2021 00:00:00").getTime();

function time_function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    console.log(distance)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));

    progress = ((14078787271 - distance) / 14078787271) * 100;
      
    document.getElementById("days").innerHTML = days + "D";
    document.getElementById("time").innerHTML = months + "M " + weeks + "W " + hours + "H";
    document.getElementById("progress").innerHTML = progress.toFixed(2) + "%";
    document.getElementById("progress").style.width = progress.toFixed(2) + "%";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "EXPIRED";
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }


time_function();
setInterval(time_function, 1000*60*10);
//14078787271