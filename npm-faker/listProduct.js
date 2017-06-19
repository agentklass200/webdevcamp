var faker = require("faker");
var cat = require("cat-me");

var Shop = function(title){
    this.title = title;
    if(title === undefined){
        this.title = "My Shop";
    }
    this.inventory = [];
    this.loadInvetory = function(count){
        for (var i = 1; i <= count; i++){
            this.inventory.push(utils.generateItem(i));
        }
    }

    this.loadInvetory(20);
}

var Item = function(){
    this.id = "";
    this.name = "";
    this.price = "";
}

var utils = {
    generateItem : function(id){
        var item = new Item();
        item.id = id;
        if(id === undefined){
            item.id = 0;
        }
        item.name = faker.commerce.productName();
        item.price = faker.commerce.price();
        return item;
    },
    displayShop : function(shop){
        if(shop instanceof Shop){
            console.log("==========================");
            console.log("Welcome to " + shop.title);
            console.log("==========================");
            for(var i = 0; i < shop.inventory.length; i++){
                console.log(shop.inventory[i].id + ". " 
                + shop.inventory[i].name + " - $" + shop.inventory[i].price);
            }
        }else{
            console.log("Wrong Shop Object!");
        }
    }
    
}

var alecxisShop = new Shop("Alecxis Shop");

utils.displayShop(alecxisShop);

console.log();
console.log(cat());
