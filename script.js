let a = new Date();
let d = a.getDate();
let mo = a.getMonth();
let yrs = a.getFullYear();
document.getElementById("date").innerHTML = d + "-" + mo + "-" + yrs


const time = () => {
  let a = new Date()
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let ms = a.getMilliseconds();
  document.getElementById("hour").innerHTML = h + " hour"
  document.getElementById("minutes").innerHTML = m + " min"
  document.getElementById("seconds").innerHTML = s + " sec"
  document.getElementById("millisec").innerHTML = ms + " millisec"

}
setInterval(time, 100)
