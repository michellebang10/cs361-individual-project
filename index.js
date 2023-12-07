/* 
Function to get current time. 
Using tutorial from: 
https://iq.opengenus.org/display-live-time-and-date-in-html/
*/

function updateTime(){
    const time = document.getElementById("time")
    const curDate = new Date().toLocaleTimeString()
    time.textContent = curDate
}

setInterval(updateTime, 1000)

/* 
Functions relating to the To-Do List
Using tutorial from: 
https://www.w3schools.com/howto/howto_js_todolist.asp
*/

// Add items to To-Do List

// Create close button for items in list. 
function closeButton(li) {
    var span = document.createElement("span")
    var button = document.createElement("button")
    button.textContent = "\u00D7"
    span.className = "close"
    span.appendChild(button)
    li.appendChild(span)
}

// Create alert when close button clicked. 
function closeItem() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            if(confirm("Do you want to delete this item? You cannot undo this action.") == true) {
                var div = this.parentElement
                div.style.display = "none"
            }
        }
    }
}

// Create items in list. 
function addItem() {
    var li = document.createElement("li")
    var input = document.getElementById("itemInput").value
    var t = document.createTextNode(input)
    li.appendChild(t)
    li.className = "list-sec"
    
    if (input === '') {
      alert("No item to add")
    } else {
      document.getElementById("todoList").appendChild(li)
    }
    document.getElementById("itemInput").value = ""
   
    closeButton(li)
    
    closeItem()
}

// Delete items from To-Do list
var close = document.getElementsByClassName("close")
var i
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement
    div.style.display = "none"
  }
}

  
var addListButton = document.getElementById("add-list-button")
addListButton.addEventListener("click", addItem)


/* 
Functions relating to the Timer
Using material from: 
https://stackoverflow.com/questions/31559469/
*/

// Format the timer input.
function formatTimerInput(input, intInput) {
    var timer = document.getElementById("timer")
    if (/:/.test(input)) {
        timer.textContent = input
    } else if (9 < intInput && intInput < 100) {
        timer.textContent = "00:" + input
    } else if (999 < intInput && intInput < 10000) {
        timer.textContent = input.substring(0,2) + ":" + input.slice(-2)
    } else if (0 < intInput && intInput < 10) {
        timer.textContent = "00:0" + input
    } else if (99 < intInput && intInput < 1000){
        timer.textContent = "0" + input.substring(0,1) + ":" + input.slice(-2)
    } else {
        alert("Not a valid time!")
    }  
}

// Set time in timer.
function setTimer() {
    var input = document.getElementById("timerInput").value
    var intInput = parseInt(input)
    if (input === '') {
        alert("Set time")
      } else if (Number.isInteger(intInput)) {
        formatTimerInput(input, intInput)
      } else {
        alert("Not a valid time!")
      }
    document.getElementById("timerInput").value = ""
}

var setTimerButton = document.getElementById("set-timer")
setTimerButton.addEventListener("click", setTimer)

// Reset time in timer.
function resetTimer() {
    var timer = document.getElementById("timer")
    if (confirm("Do you want to reset timer?") == true) {
       timer.textContent = "00:00"
      }
}

var resetTimerButton = document.getElementById("reset-timer")
resetTimerButton.addEventListener("click", resetTimer)

// Seconds countdown. 
function secCountdown(min, sec) {
    if (sec < 10){
        sec = "0" + sec
    }
    if (min < 10){
        min = "0" + min
    }
    timer.textContent = min + ":" + sec
}

// Minutes countdown.
function minCountdown(min, sec) {
    if (min < 10){
        min = "0" + min
    }
    timer.textContent = min + ":" + sec
}

// Counting down timer once started.
function countdown(timer, min, sec) {
    var run = setInterval( function () {if (timer.textContent != "00:00"){
        if (sec != "00"){
            sec = sec - 1
            secCountdown(min, sec)
        } else {
            min = min - 1
            sec = 59
            minCountdown(min, sec)
        }
    }}, 1000)

    var resetTimerButton = document.getElementById("reset-timer")
    resetTimerButton.addEventListener("click", function () {clearInterval(run)})
}

// Starting timer.
function startTimer() {
    var timer = document.getElementById("timer")
    var min = parseInt(timer.textContent.substring(0,2))
    var sec = parseInt(timer.textContent.slice(-2))

    countdown(timer, min, sec)
}

var startTimerButton = document.getElementById("start-timer")
startTimerButton.addEventListener("click", startTimer)