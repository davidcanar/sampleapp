import { Component, OnInit } from '@angular/core';
import { WebserviceService } from './webservice.service';
import { item } from './item.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  money:number = 0;
  date:Date = new Date();
  data:any[] = []
  constructor(private srv:WebserviceService){ }
  async addItem(){
    console.log("clicked!!");
    var result = await this.srv.saveData(new item(this.money, this.date));
    console.log(result.json());
    this.getData();
  }
  async getData(){
    console.log('here'); 
    var data = await this.srv.getData()
    this.data = data.json();
  }
  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }
}
