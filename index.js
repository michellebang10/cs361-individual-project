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
    li.appendChild(t)
    if (input === '') {
      alert("No item to add")
    } else {
      document.getElementById("todoList").appendChild(li)
    }
    document.getElementById("itemInput").value = ""
  }
  
var addListButton = document.getElementById("add-list-button")
addListButton.addEventListener("click", addItem)


