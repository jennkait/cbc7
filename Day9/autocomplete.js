window.addEventListener("load", function(){

    var name_input = document.getElementById("name_input");
    name_input.addEventListener("keyup", function(event){hinter(event)});

    window.hinterXHR = new XMLHttpRequest();
});

function hinter(event) {

    var input = event.target;
    var list = document.getElementById("pets");
    var min_characters = 0;

    if (input.value.length < min_characters){
        return;
    } else {
        window.hinterXHR.abort();

        window.hinterXHR.onreadystatechange = function(){
            if (this.readyState == 4 && this.staus == 200){
                var response = JSON.parse(this.responseText);
                list.innerHTML = "";

                response.forEach(function(item) {
                    var option = document.createElement("option");
                    option.value = item;
                    list.appendChild(option);
                });
            }
        };

    }

function validateForm() {

    var input = document.getElementById("name_input");
    var pets = document.getElementById("pets");

    for (var element of pets.children) {
        if(element.value == input.value) {
            return true;
        } 
    }
         alert("Pet input is invalid")
        return false;
}
