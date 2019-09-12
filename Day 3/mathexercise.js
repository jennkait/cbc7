//math exercise

var random = Math.floor(Math.random() * 10);

function checkIt() {
    var text=document.getElementById('input').value;
     if (random == text) {
        alert ("It's a match!");
    } else {
        alert ("It's not a match!");
     }

}

