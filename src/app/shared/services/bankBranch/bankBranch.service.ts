import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';
import { USER } from '../../config/user';

@Injectable()
export class BankBranchService {

  constructor(private http: Http) { }

  getBankBranch(BankID) {

    //  alert(BankID);alert('dddddddddddddddddddd');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(URL_CONST.URL_PREFIX + 'api/BankBranch/Get?BankID=' + BankID, options)
      .map((response: Response) => response.json());

  }


}
