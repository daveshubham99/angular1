import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { tag } from 'src/app/shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodsByTag(tag:string):Foods[]{
    return tag == 'All'?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
  }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=> food.id ==id)!;
  }
  getAllTag():tag[]{
    return[
    {name: 'All' , count: 8 },
    {name: 'lunch' , count : 4 },
    {name: 'dinner' , count : 4 },
    {name: 'breakfast' , count: 2 }


    ];

  }
  getAll():Foods[]{
   return[ 
      {
        id:1,
        price:350,
        name:'Hara-bhara kabab',
        favorite:true,
        star:3,
        tags:['lunch'],
        imgurl:'assets/food-1.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:2,
        price:350,
        name:'Hara-bhara kabab',
        favorite:false,
        star:3,
        tags:['lunch','breakfast'],
        imgurl:'assets/food-2.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:3,
        price:350,
        name:'Hara-bhara kabab',
        favorite:false,
        star:3,
        tags:['lunch'],
        imgurl:'assets/food-3.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:4,
        price:350,
        name:'pizza',
        favorite:false,
        star:3,
        tags:['dinner'],
        imgurl:'assets/food-4.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:5,
        price:350,
        name:'burger',
        favorite:true,
        star:3,
        tags:['dinner'],
        imgurl:'assets/food-5.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:6,
        price:350,
        name:'tomato-soup',
        favorite:false,
        star:3,
        tags:['breakfast','dinner'],
        imgurl:'assets/food-6.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:7,
        price:350,
        name:'veg-sandwich',
        favorite:false,
        star:3,
        tags:['lunch'],
        imgurl:'assets/food-7.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      },
      {
        id:8,
        price:350,
        name:'margreta',
        favorite:false,
        star:3,
        tags:['dinner'],
        imgurl:'assets/food-8.jpg',
        cooktime:'10-20',
        origins:['Austria','india']
      }
   
  ]
  }

}
