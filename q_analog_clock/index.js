//synta : setInterval(function, milliseconds, param1, param2, ...)


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;//12->360deg means 1hr=30deg
                                   //12*60->360deg means 1min-1/2
    mrotation = 6*mtime;//60 min->360deg  //seconds are small so didnt consider here
    srotation = 6*stime;
 
    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);
