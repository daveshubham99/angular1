import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { Foods } from '../shared/model/food';
import { CartItem } from '../shared/model/cartitem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

            private cart:Cart=new Cart();
    addToCart(food:Foods){
      let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem)
    {
      this.changeQuantity(food.id, cartItem.quantity +1);
    }  
    this.cart.items.push(new CartItem(food));
    }
    removeFromCart(foodId:number){

      this.cart.items = this.cart.items.filter(item => item.food.id  !=foodId);
    }
      changeQuantity(quantity:Number, foodId:Number)
    {
        let cartItem =this.cart.items.find(item =>item.food.id === foodId);
   
    if(!CartItem) return;
    CartItem.quantity  = quantity;

    }
    getCart()
    {
      return this.cart;
    }
}
