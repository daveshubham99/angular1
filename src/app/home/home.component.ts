import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {

      if (params['searchItems']) {
        console.log('in if')
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItems'].toLowerCase()));
      }
      else if (params['tag']) {
        console.log('intag');
        this.foods = this.fs.getAllFoodsByTag(params['tag']);
      }
      else {
        console.log('inelse');
        this.foods = this.fs.getAll();
        


      }

    })


  }
}


