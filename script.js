const input = document.getElementById("input");
const listBox = document.getElementById("list-box");

function addToDo() {
    if (input.value === '') {
        alert(" Oops!! You must write something.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    input.value = "";
    saveData();

}

listBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listBox.innerHTML);
}
function showTask() {
    listBox.innerHTML = localStorage.getItem("data");
}
showTask();
