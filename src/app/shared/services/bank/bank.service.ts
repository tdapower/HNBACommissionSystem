import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';


@Injectable()
export class BankService {

  constructor(private http: Http) { }

  getBank() {
    return this.http.get(URL_CONST.URL_PREFIX + 'api/Bank/get')
      .map((response: Response) => response.json());

  }

  SaveBank(params) {

    try {
      let body = params;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      //headers.append('Authorization', USER.USER_AUTH_TOKEN);
      let postoptions = new RequestOptions({ headers: headers });

      return this.http.post(URL_CONST.URL_PREFIX + 'api/Bank/AddBank', body, postoptions)
        .map((response: Response) => JSON.stringify(response.json()))
        .timeout(60000)
        .catch((error: any) => {
          //this.handleError;
          return Observable.throw(new Error(error.status))
        });

    } catch (error) {

    }

  }


}
