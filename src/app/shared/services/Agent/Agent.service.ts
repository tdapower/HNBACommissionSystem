import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../../config/url.constants';

import { USER } from '../../config/user';



@Injectable()
export class AgentService {

  constructor(private http: Http) { }

  getAgent() {
    return this.http.get(URL_CONST.URL_PREFIX + 'api/Agent/get')
      .map((response: Response) => response.json());

  }

  SaveAgent(params) {

    try {
      let body = params;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Authorization', USER.USER_AUTH_TOKEN);
      let postoptions = new RequestOptions({ headers: headers });

      return this.http.post(URL_CONST.URL_PREFIX + 'api/Agent/AddAgent', body, postoptions)
        .map((response: Response) => JSON.stringify(response.json()))
        .timeout(60000)
        .catch((error: any) => {
          //this.handleError;
          return Observable.throw(new Error(error.status))
        });

    } catch (error) {

    }

  }


  GetAgentSearchDetails(params) {
    //   let body = params;
    //   let headers = new Headers({ 'Content-Type': 'application/json' });
    //   headers.append('Authorization', USER.USER_AUTH_TOKEN);
    //   let postoptions = new RequestOptions({ headers: headers });

    //   console.log(body);
    //   console.log(JSON.stringify(body));

    // return this.http.post(URL_CONST.URL_PREFIX + 'api/AgentSearch/GetSearchAgents=' + body, postoptions)
    //   .map((response: Response) => response.json());





    let body = params;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let postoptions = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(body));

    return this.http.post(URL_CONST.URL_PREFIX + 'api/AgentSearch/SearchAgents', body, postoptions)
      .map((response: Response) => (response.json()))
      .timeout(60000)
      .catch((error: any) => {
        //this.handleError;
        return Observable.throw(new Error(error.status))
      });


  }



  getAgentBySeqId(SeqId) {
    console.log('seq id  ' + SeqId);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(URL_CONST.URL_PREFIX + 'api/Agent/GetAgentByID/' + SeqId, options)
      .map((response: Response) => JSON.stringify(response.json()))
      .catch((error: any) => {
        //this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

}
