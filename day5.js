//arrays exercises

var groceryList = ["banana", "apple", "tomato", "bread", "avocado", "lettuce", "carrots", "celery", "cilantro", "cauliflower" ];
var name = "Jennifer Kaitlyn Alexander";

function listGroceries(grocArray){
    for(var i = 0; i <grocArray.length; i++){
        console.log(grocArray[i]);
    }
}

listGroceries(groceryList);
listGroceries(name);

name = name.topUpperCase();
listGroceries(name);