var inventory = [];
function fillArray() {
        inventory["water"] = 100,
        inventory["soda"] = 100,
        inventory["detergent"] = 50,
        inventory["apple"] = 100,
        inventory["banana"] = 100,
        inventory["tomato"] = 100,
        inventory["bread"] = 50,
        inventory["butter"] = 50,
        inventory["milk"] = 50,
        inventory["chicken"] = 50;
 }

 fillArray();


 function addInventory(itemName, quantity) {
    inventory[itemName] += quantity;
 }

 addInventory("water",100)

 function subtractInventory(itemName, quantity){
     inventory[itemName] -= quantity;
 }
 subtractInventory("soda",100)

 function outOfStock(){
    for (let item in inventory) {
    if(inventory[itemName] === 0) {
      console.log([itemName] + "is out of stock");
      }
    }
 }