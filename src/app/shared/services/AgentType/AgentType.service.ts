import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';

@Injectable()
export class AgentTypeService {

  constructor(private http: Http) { }

  getAgents() {
    return this.http.get(URL_CONST.URL_PREFIX + 'api/AgentType/get')
      .map((response: Response) => response.json());

  }

}
