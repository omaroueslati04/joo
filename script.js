class product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}

class ShoppingCardItem{
    constructor(product,quantity){
        this.product=product;
        this.quantity=quantity;
    }
}

class ShoppingCard{
    constructor(){
        this.items=[];
    }
    calculateTotalPrice(){
        return this.product.price*this.quantity;
    }
}

addItem(product,quantity);{
    const existingitem=this.items.find(items=>this.product.id===product.id);
    if(existingitem)
        existingitem.quantity+=quantity;
    else{
        const newitem=new ShoppingCardItem(product,quantity);
        this.items.push(newitem);
    }
}
removeEventListener(productid){
    this.items=this.items.filter(item=>item.product.id!==productid);
}


