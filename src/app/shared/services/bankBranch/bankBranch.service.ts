import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';

@Injectable()
export class BankBranchService {

  constructor(private http: Http) { }

  getBankBranch(BankID) {

//  alert(BankID);alert('dddddddddddddddddddd');

    return this.http.get(URL_CONST.URL_PREFIX +'api/BankBranch?BankID=' + BankID)
      .map((response: Response) => response.json());

  }


}
