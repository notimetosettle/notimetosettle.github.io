// var startingDate = new Date("Sep 09, 2021 00:00:00").getTime();
// var countDownDate = new Date("Dec 11, 2021 00:00:00").getTime();

var startingDate = new Date("Oct 04, 2021 00:00:00").getTime();
var countDownDate = new Date("Oct 07, 2021 00:00:00").getTime();

function time_function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    // console.log(distance)

    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));

    progress = ((now - startingDate) / (countDownDate - startingDate)) * 100;

    console.log(distance, progress, countDownDate, startingDate, now);
      
    // document.getElementById("days").innerHTML = days + "D";
    document.getElementById("days").innerHTML = Math.floor((distance / (1000 * 60 * 60))) + "H";
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
