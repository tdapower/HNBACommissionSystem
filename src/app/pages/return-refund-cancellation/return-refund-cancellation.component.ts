import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

@Component({
  selector: 'app-return-refund-cancellation',
  templateUrl: './return-refund-cancellation.component.html',
  styleUrls: ['./return-refund-cancellation.component.css']
})
export class ReturnRefundCancellationComponent implements OnInit {

  datepickerOpts = {
    format: 'dd/mm/yyyy'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
