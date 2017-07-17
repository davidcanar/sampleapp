import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { WebserviceService } from './webservice.service';
import { item } from './item.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:any[] = []
  constructor(private srv:WebserviceService){ }
  myForm:FormGroup;

  async addItem(){
    var result = await this.srv.saveData(new item(this.myForm.value.money, this.myForm.value.date));
    this.getData();
    this.myForm.reset();
  }
  async ngOnInit() {
    this.initializeForm();
    this.getData();
  }
  async getData(){
    var data = await this.srv.getData()
    this.data = data.json();
  }
  async initializeForm(){
    this.myForm = new FormGroup({
      'money': new FormControl(null, Validators.required),
      'date' : new FormControl(null, Validators.required)
    });
  }
}
