import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private url: string = 'http://empyreanliquidityapi20180818125654.azurewebsites.net/api/';

  constructor(private http: Http) {}

  getAccounts(): Observable<any> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    const getItemUrl = this.url + 'worker/accounts?id=' + user['user_id'];
    return this.http
      .post(getItemUrl, {})
      .map(
      res => {
        //console.log("Response: "+res.json());
        return res.json();
      },
      err => {
        return err;
      }
      )
  }

  getResults(id,scenario): Observable<any> {
    const getItemUrl = this.url + 'worker/results?AccountID=' + id+'&Scenario_Num='+scenario;
    return this.http
      .post(getItemUrl, {})
      .map(
      res => {
        //console.log("Response: " + res.json());
        return res.json();
      },
      err => {
        return err;
      }
      )
  }
}
