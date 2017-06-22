import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
 import { URL_CONST } from '../../config/url.constants';

@Injectable()
export class BranchService {

  constructor(private http: Http) { }

  getBranch() {
    return this.http.get(URL_CONST.URL_PREFIX +'api/Branch/get')
      .map((response: Response) => response.json());

  }


}
