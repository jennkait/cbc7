//Dom Manipulation Exercises

//Exercise 1

document.getElementById("main").style.color = "pink";

document.getElementById("content").style.color = "green";

document.getElementById("list").style.color = "purple";

//Exercise 2

document.getElementById("mainClass").className = "newMain";

document.getElementById("contentClass").className = "newContent";

document.getElementById("listclass").className = "newList";

//Change text

function mainFunction(){
    document.getElementById("main").innerHTML = "Hello hello hello";
}

function contentFunction(){
    document.getElementById("content").innerHTML = "Different content";
}

function listFunction(){
    document.getElementById("li1").innerHTML = "Begin";
}
