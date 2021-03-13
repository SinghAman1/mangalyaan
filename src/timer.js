
let minutes;
let seconds;
let milisec;
let started = false;
let interval;
let startTime = new Date();
let btnText;


/**
 * helper function for start() function
 */
export function timer() {
  const now = new Date();

  const milisecond = now - startTime;
  minutes = Math.floor(milisecond / (1000 * 60));
  seconds = Math.floor((milisecond / 1000) % 60);
  milisec = Math.floor(milisecond % 100);

  // show 09 instead of 9 in case minutes, seconds or milisec are less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milisec = milisec < 10 ? "0" + milisec : milisec;

  document.getElementById('time-count').innerText ="time -"+
    minutes + " min " + seconds + " sec " + milisec + " ms ";
}

export function start() {
  // btnText = startBtnText; 
  //  console.log('start') 
  //  console.log( new Date()); 
  startTime = new Date();
  if (started == false) {
    interval = setInterval(timer, 10);
    started = true;
  } else {
    clearInterval(interval);
    started = false;
  }
}

