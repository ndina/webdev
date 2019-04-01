import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  name:String;
  price:number;
  model:String;
  sizes:number[];
  isEdit:boolean;
  isEdit2:boolean;
  isEdit3:boolean;

  constructor() { }

  ngOnInit() {
    this.name = "Спортивный костюм";
    this.model = "Nike";
    this.price = 22000;
    this.sizes = [42, 44, 46, 48];
  }
  showEdit(){
    this.isEdit = !this.isEdit;
    this.isEdit2 = false;
    this.isEdit3 = false;
  }
  showEdit2(){
    this.isEdit2 = !this.isEdit2;
    this.isEdit = false;
    this.isEdit3 = false;
  }
  showEdit3(){
    this.isEdit3 = !this.isEdit3;
    this.isEdit = false;
    this.isEdit2 = false;
  }

}
