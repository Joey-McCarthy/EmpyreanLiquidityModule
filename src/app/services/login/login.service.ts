import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private url: string = 'http://empyreanliquidityapi20180818125654.azurewebsites.net/api/';

  constructor(private http: Http) {}

  login(post): Observable<any> {
    const getLoginUrl = this.url + 'Login?email=' + post['username'] + '&password=' + post['password'];
    return this.http
      .post(getLoginUrl, {})
      .map(
      res => {
        var obj = JSON.parse(res.json());
        if (obj.status == true) {
          localStorage.setItem('currentUser', JSON.stringify(obj));
        }
        return obj;
      },
      err => {
        return err;
      }
      )
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
