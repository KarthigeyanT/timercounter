const timerbutton = document.getElementById('timer-button')
function changetext(){
     if(timerbutton.textContent==='START'){
        timerbutton.textContent = 'STOP'
        timerbutton.style.setProperty('background-color','red')
        timerbutton.style.setProperty('border-radius','10px')
        startTimer()
     }
     else{
        timerbutton.textContent = 'START'
        timerbutton.style.setProperty('background-color','rgb(40, 199, 32)')
        timerbutton.style.setProperty('border-radius','10px')
        stopTimer()
     }
}
timerbutton.addEventListener('click',changetext)
//setTimeout(printhello,3000)
// setInterval(printhello,2000)
// function printhello(){
    // console.log('HELLO')
    //}
/**ANOTHER WAY FOR SETINTERVAL
 * setInterval(function (){
    console.log('HELLO')
},2000)
.................................ARROW FUNC.................
setInterval(() => {
    console.log('HELLO')
},2000)
 */
// let i=0
// setInterval(printno,1000)
// function printno(){
//    console.log(i+=1)
// }
//counter
const timeLogs=document.getElementById('time-logs')
const hourButton=document.getElementById('hour')
const minButton=document.getElementById('mins')
const secButton=document.getElementById('secs')
let interval
function startTimer(){
    let s=0
    let m=0
    let h=0
    interval=setInterval(function(){
          secButton.textContent=(s+=1).toString().padStart(2,'0')
   if(s===60){
    s=0
    minButton.textContent=(m+=1).toString().padStart(2,'0')
   }
  if(m===59){
    m=0
    hourButton.textContent=(h+=1).toString().padStart(2,'0')
  }
  
},1000)
}
function stopTimer(){
  clearInterval(interval)
  //logging the timer value
    // timeLogs.innerHTML += '<p>' + hourElement.textContent + ' : ' + minElement.textContent + ' : ' + secondsElement.textContent + '</p>'
    timeLogs.innerHTML += `
        <p> ${hourButton.textContent} : ${minButton.textContent} : ${secButton.textContent} </p>`
    
  //resetting the timer
  secButton.textContent = '00'
  minButton.textContent = '00'
  hourButton.textContent = '00'
}
/* if(timerbutton){
    timerbutton.addEventListener('click',startTimer)
}*/