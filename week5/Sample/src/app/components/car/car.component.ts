import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string; // свойства, переменная
  speed:number;
  model:string;
  colors: Colors;
  arrayOptions:string[];
  isEdit: boolean = false;  


  constructor() { }

  ngOnInit() { //функция (можем внутри прописывать любые действия)
    this.name = 'Tesla'; // мы перезаписали значение
    this.speed = 250;
    this.model = 'Model S';
    this.colors = {
      car: 'White', 
      salon: 'Grey',
      wheels: 'Black'
    };
    this.arrayOptions = ["Safety for kids", "Self Driving", "Auto Parking"];
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  addOption(option){
    this.arrayOptions.unshift(option);
    return false;
  }

  deleteOpt(option){
    for(let i = 0; i < this.arrayOptions.length; i++){
      if(this.arrayOptions[i] == option){
        this.arrayOptions.splice(i, 1);
        break;
      }
    }

  }

  carSelect(carName) {
    if(carName == 'bmw'){
      this.name = 'BMW'; // мы перезаписали значение
      this.speed = 289;
      this.model = 'A';
      this.colors = {
        car: 'White', 
        salon: 'Grey',
        wheels: 'Black'
      };
      this.arrayOptions = ["Safety for kids", "Self Driving", "Auto Parking"];
    }
    else if(carName == 'toyota'){
      this.name = 'Toyota'; // мы перезаписали значение
      this.speed = 280;
      this.model = 'Tokyo Drift';
      this.colors = {
        car: 'White', 
        salon: 'Grey',
        wheels: 'Black'
      };
      this.arrayOptions = ["Safety for kids", "Self Driving", "Auto Parking"];

    }
    else{
      this.name = 'Hyundai'; // мы перезаписали значение
      this.speed = 250;
      this.model = 'HHH';
      this.colors = {
        car: 'White', 
        salon: 'Grey',
        wheels: 'Black'
      };
      this.arrayOptions = ["Safety for kids", "Self Driving", "Auto Parking"];
    }
  }
}
interface Colors {
  car:string,
  salon:string,
  wheels:string
  
}
