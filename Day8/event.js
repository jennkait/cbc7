//Event Listener Exercises

//Exercise 1

document.getElementById("header").addEventListener("click",
    changeColor);
    
function changeColor(){
    document.getElementById("header").style.color = "purple"
}


//Exercise 2
//Create a list with 3 elements

//Exercise 3

const parent = document.getElementById("parent");

parent.addEventListener("click", event => {
    if (event.target.className === "child") {
        console.log(event.target.innerHTML);
    }
})
