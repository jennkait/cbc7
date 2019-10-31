var orderInput = document.getElementById('order-input');
var menuList = document.getElementById('menu-list');
var menu = {"Fries": 20, "Hamburgers": 10, "Shakes": 5 }

function setMenu() {
    var menuString = '';
    for (var name in menu) {
        menuString += `<li>${name} - ${menu[name]}</li>`;
    }
    menuList.innerHTML = menuString;
}

function placeOrder(){
    
    console.log('orderInput',orderInput.value)

    // parse comma delimited order
    var items = orderInput.value.split(',');

    // loop through order
    for (var item of items) {
        // parse item quantity from name and trim
        item = item.split(':')
        var quantity = item[0];
        var name = item[1];
        quantity = quantity.trim();
        name = name.trim();
        name = name.toLowerCase();

        console.log('name', name)
        console.log('quantity', quantity)

        if (!menu[name]) {
            // not on menu or not enough quantity
            console.log(`We do not carry ${name}`);
        } else if (menu[name] - quantity < 0) {
            console.log(`We are out of stock of ${name}`);
        }else {
            // item is in stock
            menu[name] = menu[name] - quantity;
            console.log(`Purchased ${quantity} ${name}`);
        }
        orderInput.value = '';
        setMenu();
    }
}
setMenu();
 
function loadDoc() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
 };
xhttp.open("POST", "demo_post.asp", true);
xhttp.send();
}
