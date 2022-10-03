(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    plesweekend = "10/07/2022"
    plesweekend_end = "10/10/2022"
    
    const countDown = new Date(plesweekend).getTime(),
        x = setInterval(function() {
  
            const now = new Date().getTime(),
                distance = countDown - now;
            const countDown_end = new Date(plesweekend_end).getTime(),
              distance_end = countDown_end - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when end date is reached
          if (distance_end < 0) {
            document.getElementById("headline").innerText = "Plesweekend zit er weer op, tot volgend jaar!";
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
          }
          //do something later when date is reached
          else if (distance < 0) {
            document.getElementById("headline").innerText = "Jaaa Plesweekend!!!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());