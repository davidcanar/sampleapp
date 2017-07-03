import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { item } from './item.class';

@Injectable()
export class WebserviceService {

  constructor(private http:Http) { }
  getData(){
    return this.http.get('http://localhost:1234/getTransactions').toPromise();
  }
  saveData(data:item){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:1234/saveTransaction", data, options).toPromise();
  }
}
