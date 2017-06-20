var faker = require("faker");
var cat = require("cat-me");

//SHOP class
var Shop = function(title){
    this.title = title || "My Shop";
    this.inventory = [];
    
    //Load random items in the inventory
    this.loadInvetory(10);
}

//loadInventory under Shop class
Shop.prototype.loadInvetory = function(count){
    for (var i = 1; i <= count; i++){
        this.inventory.push(utils.generateItem(i));
    }
}

//Item class
var Item = function(){
    this.id = "";
    this.name = "";
    this.price = "";
}

//Utility object
var utils = {
    //Generate an item.
    generateItem : function(id){
        var item = new Item();
        item.id = id || 0;
        item.name = faker.commerce.productName();
        item.price = "$" + faker.commerce.price();
        return item;
    },
    //Display a shop object.
    displayShop : function(shop){
        if(shop instanceof Shop){
            console.log("==========================");
            console.log("Welcome to " + shop.title);
            console.log("==========================");
            for(var i = 0; i < shop.inventory.length; i++){
                console.log(shop.inventory[i].id + ". " 
                + shop.inventory[i].name + " - " + shop.inventory[i].price);
            }
        }else{
            console.log("Wrong Shop Object!");
        }
    }
    
}

//Instantiate a Shop object.
var alecxisShop = new Shop();

utils.displayShop(alecxisShop);

console.log();
console.log(cat());
