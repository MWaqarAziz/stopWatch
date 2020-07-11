var msec = 0;
var min = 0;
var sec = 0;
var id_msec = document.getElementById("sec");
var id_sec = document.getElementById("min");
var id_min = document.getElementById("hr");
var increment;
function _sec(){
  msec++;
  id_msec.innerHTML = msec;
  if(msec === 60){
      msec = 0;
      sec++;
      id_sec.innerHTML = sec;
  }
  else if(sec === 5){
      sec = 0;
      min++;
      id_min.innerHTML = min;
  }
}
function start(){
    increment = setInterval(_sec, 100);
    document.getElementById("start").disabled = true;

}
function stop(){
    clearInterval(increment);
    document.getElementById("start").disabled = false;
}
function reset(){
    msec = 0;
    min = 0;
    sec = 0;
    id_msec.innerHTML = msec;
    id_sec.innerHTML = sec;
    id_min.innerHTML = min;
    stop();
    document.getElementById("start").disabled = false;
}
