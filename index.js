/* 
Function to get current time. 
Using tutorial from: https://iq.opengenus.org/display-live-time-and-date-in-html/
*/

function updateTime(){
    const time = document.getElementById("time")
    const curDate = new Date().toLocaleTimeString()
    time.textContent = curDate
}

setInterval(updateTime, 1000)

/* 
Functions relating to the To-Do List
Using tutorial from: https://www.w3schools.com/howto/howto_js_todolist.asp
*/

// Add items to To-Do List
function addItem() {
    var li = document.createElement("li")
    var input = document.getElementById("itemInput").value
    var t = document.createTextNode(input)
    var b = document.createElement("button")
    b.textContent = "x"
    li.appendChild(t)
    li.appendChild(b)
    if (input === '') {
      alert("No item to add")
    } else {
      document.getElementById("todoList").appendChild(li)
    }
    document.getElementById("itemInput").value = ""
  }
  
var addListButton = document.getElementById("add-list-button")
addListButton.addEventListener("click", addItem)

// Delete item from To-Do List


/* 
Functions relating to the Timer
Using material from: https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
*/

// Set time in timer
function setTimer() {
    var input = document.getElementById("timerInput").value
    var timer = document.getElementById("timer")
    if (input === '') {
        alert("Set time")
      } else {
        timer.textContent = input
      }
    document.getElementById("timerInput").value = ""
}

var setTimerButton = document.getElementById("set-timer")
setTimerButton.addEventListener("click", setTimer)

// Reset time in timer
function resetTimer() {
    var timer = document.getElementById("timer")
    if (confirm("Do you want to reset timer?") == true) {
       timer.textContent = "00:00"
      }
}

var resetTimerButton = document.getElementById("reset-timer")
resetTimerButton.addEventListener("click", resetTimer)

// Start timer 

function countdown(timer, min, sec) {
    setInterval( function () {if (timer.textContent != "00:00"){
        console.log("while loop")
        if (sec != "00"){
            sec = parseInt(sec)
            sec = sec - 1
            if (sec < 10){
                sec = "0" + sec
            }
            timer.textContent = min + ":" + sec
        } else {
            min = parseInt(min)
            min = min - 1
            sec = 59
            if (min < 10){
                min = "0" + min
            }
            timer.textContent = min + ":" + sec
        }
    }}, 1000)
}

function startTimer() {
    var timer = document.getElementById("timer")
    var min = timer.textContent.substring(0,2)
    var sec = timer.textContent.slice(-2)

    countdown(timer, min, sec)
}

var startTimerButton = document.getElementById("start-timer")
startTimerButton.addEventListener("click", startTimer)