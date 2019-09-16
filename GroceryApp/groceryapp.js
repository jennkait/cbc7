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
    if(!quantity){
       return console.log("Please specify a quantity")
    }
    if(!inventory[itemName]){
       return console.log("That item is not available")
    }
    if (inventory[itemName] < quantity){
       return console.log("We only have" + inventory[itemName] + "not", quantity)
    }
    inventory[itemName] = inventory[itemName] + quantity;
 }

 addInventory("water",100)

 function subtractInventory(itemName, quantity){
   if(!quantity){
      return console.log("Please specify a quantity")
   }
   if(!inventory[itemName]){
      return console.log("That item is not available")
   }
   if (inventory[itemName] < quantity){
      return console.log("We only have" + inventory[itemName] + "not", quantity)
   }
     inventory[itemName] = inventory[itemName] - quantity;
 }
 subtractInventory("soda",100)

 function outOfStock(){
    for (let item in inventory) {
    if(inventory[itemName] === 0) {
      console.log([itemName] + "is out of stock")
      }
    }
 }