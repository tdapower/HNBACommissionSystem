import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { IUser } from '../../shared/models/user/user.model';
import { DatePipe } from '@angular/common';

import { PIDSearchService } from '../../shared/services/PIDSearch/pidsearch.service';
import { IPIDSearch } from '../../shared/models/PIDSearch';

import { PIDDetailsService } from '../../shared/services/PIDDetails/piddetails.service';
import { IPID } from '../../shared/models/PID';

import { RefundService } from '../../shared/services/Refund/refund.service';
import { IRefund } from '../../shared/models/Refund';

import { NgZone, Inject, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-return-refund-cancellation',
  templateUrl: './return-refund-cancellation.component.html',
  styleUrls: ['./return-refund-cancellation.component.css']
})
export class ReturnRefundCancellationComponent implements OnInit {

  datepickerOpts = {
    format: 'dd/mm/yyyy'
  }


  PID_RECEIPT_NO_SEARCH: string = '';
  PID_RECEIPT_DATE_SEARCH: string = '';
  PID_PROPOSAL_NO_SEARCH: string = '';
  PID_POLICY_NO_SEARCH: string = '';
  PID_AGT_CODE_SEARCH: string = '';


  PID_RECEIPT_NO: string = '';
  PID_RECEIPT_DATE: string = '';
  PID_CUSTOMER: string;
  PID_PROPOSAL_NO: string;
  PID_POLICY_NO: string;
  PID_RECEIPT_AMT: string;
  PID_TIME_SLAB: string;
  PID_CONFIRM_AMT: string;
  PID_CONFIRM_DATE: string;
  PID_RV_NO: string;
  PID_BAL_TYPE: string;
  PID_AGT_CODE: string;
  PID_AVAILABLE_AMT: string;

  PID_RECEIPT_NO_CLS: string = '';
  PID_RECEIPT_DATE_CLS: string = '';
  PID_CUSTOMER_CLS: string;
  PID_PROPOSAL_NO_CLS: string;
  PID_POLICY_NO_CLS: string;
  PID_RECEIPT_AMT_CLS: string;
  PID_TIME_SLAB_CLS: string;
  PID_CONFIRM_AMT_CLS: string;
  PID_CONFIRM_DATE_CLS: string;
  PID_RV_NO_CLS: string;
  PID_BAL_TYPE_CLS: string;
  PID_AGT_CODE_CLS: string;


  RFD_ID: number = 0;
  RFD_RECEIPT_NO: string = '';
  RFD_REFUND_DATE: string = '';
  RFD_TYPE: number = 0;
  RFD_AMT: string = '';
  RFD_PERCENTAGE: number = 0;
  RFD_BY: string = '';
  RFD_REASON: string = '';
  RFD_AGT_CODE: string = '';
  RFD_PROCESS_IND: string = '';
  RFD_RV_NO: string = '';
  RFD_PV_NO: string = '';
  RFD_BAL_TYPE: string = '';
  RFD_CREATED_BY: string = '';
  RFD_STATUS: number = 0;
  RFD_CANCELLATION_FEE: string = '';
  RFD_RECOVERY_FEE: string = '';
  RFD_ADVICE_REF: String = '';


  RFD_TYPE_CLS: string = '';
  RFD_AMT_CLS: string = '';
  RFD_CANCELLATION_FEE_CLS: string = '';
  RFD_RECOVERY_FEE_CLS: string = '';
  RFD_REFUND_DATE_CLS: string = '';
  RFD_ADVICE_REF_CLS: string = '';

  rtnDate: Date = null;
  User: IUser;

  PIDList: Array<IPIDSearch> = [];

  isNEWDisabled: boolean = false;
  isEDITDisabled: boolean = false;
  isSAVEDisabled: boolean = false;
  isCANCELDisabled: boolean = false;


  constructor(private PIDSearchService: PIDSearchService, private PIDDetailsService: PIDDetailsService, private RefundService: RefundService) { }
  //constructor(private PIDSearchService: PIDSearchService) { }

  ngOnInit() {

    this.FormButtonStatusChange('LOAD');

    this.User = JSON.parse(localStorage.getItem('currentMRPUser'));

  }

  NewRecord() {


    this.PID_RECEIPT_NO_CLS = "form-group";
    this.PID_RECEIPT_DATE_CLS = "form-group";
    this.PID_CUSTOMER_CLS = "form-group";
    this.PID_PROPOSAL_NO_CLS = "form-group";
    this.PID_POLICY_NO_CLS = "form-group";
    //this.PID_RECEIPT_AMT_CLS = "form-group";
    this.PID_TIME_SLAB_CLS = "form-group";
    this.PID_CONFIRM_AMT_CLS = "form-group";
    this.PID_CONFIRM_DATE_CLS = "form-group";
    this.PID_RV_NO_CLS = "form-group";
    this.PID_BAL_TYPE_CLS = "form-group";
    this.PID_AGT_CODE_CLS = "form-group";

    this.FormButtonStatusChange('NEW');
  }


  clearRecord() {
    this.RFD_AMT = "";
    this.RFD_REASON = "";
    this.RFD_CANCELLATION_FEE = "";
    this.RFD_RECOVERY_FEE = "";
    this.RFD_ADVICE_REF = "";



  }


  CancelRecord() {

    this.PID_RECEIPT_NO_CLS = "form-group";
    this.PID_RECEIPT_DATE_CLS = "form-group";
    this.PID_CUSTOMER_CLS = "form-group";
    this.PID_PROPOSAL_NO_CLS = "form-group";
    this.PID_POLICY_NO_CLS = "form-group";
    //this.PID_RECEIPT_AMT_CLS = "form-group";
    this.PID_TIME_SLAB_CLS = "form-group";
    this.PID_CONFIRM_AMT_CLS = "form-group";
    this.PID_CONFIRM_DATE_CLS = "form-group";
    this.PID_RV_NO_CLS = "form-group";
    this.PID_BAL_TYPE_CLS = "form-group";
    this.PID_AGT_CODE_CLS = "form-group";

    this.RFD_AMT_CLS = "form-group";
    this.RFD_CANCELLATION_FEE_CLS = "form-group";
    this.RFD_RECOVERY_FEE_CLS = "form-group";

    this.clearRecord();

    this.FormButtonStatusChange('CANCEL');
  }

  ClearSearch() {

    this.PID_RECEIPT_NO_SEARCH = "";
    this.PID_RECEIPT_DATE_SEARCH = "";
    this.PID_PROPOSAL_NO_SEARCH = "";
    this.PID_POLICY_NO_SEARCH = "";
    this.PID_AGT_CODE_SEARCH = "";

    this.PIDList = [];

  }

  FormButtonStatusChange(Status) {
    if (Status == 'NEW') {
      this.isNEWDisabled = true;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = false;
      this.isCANCELDisabled = false;

      this.RFD_AMT_CLS = "form-group";
      this.RFD_CANCELLATION_FEE_CLS = "form-group";
      this.RFD_RECOVERY_FEE_CLS = "form-group";
      this.RFD_ADVICE_REF_CLS = "form-group";

      // this.PID_RECEIPT_NO = "";
      // this.PID_RECEIPT_DATE = "";
      // this.PID_CUSTOMER = "";
      // this.PID_PROPOSAL_NO = "";
      // this.PID_POLICY_NO = "";
      // this.PID_RECEIPT_AMT = "";
      // this.PID_TIME_SLAB = "";
      // this.PID_CONFIRM_AMT = "";
      // this.PID_CONFIRM_DATE = "";
      // this.PID_RV_NO = "";
      // this.PID_BAL_TYPE = "";
      // this.PID_AGT_CODE = "";

      this.clearRecord();

    }
    if (Status == 'EDIT') {
      this.isNEWDisabled = true;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = false;
      this.isCANCELDisabled = false;
    }
    if (Status == 'SAVE') {
      this.isNEWDisabled = false;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = true;
      this.isCANCELDisabled = true;

      this.PID_RECEIPT_NO = "";
      this.PID_RECEIPT_DATE = "";
      this.PID_CUSTOMER = "";
      this.PID_PROPOSAL_NO = "";
      this.PID_POLICY_NO = "";
      //this.PID_RECEIPT_AMT = "";
      this.PID_TIME_SLAB = "";
      this.PID_CONFIRM_AMT = "";
      this.PID_CONFIRM_DATE = "";
      this.PID_RV_NO = "";
      this.PID_BAL_TYPE = "";
      this.PID_AGT_CODE = "";
    }
    if (Status == 'CANCEL') {
      this.isNEWDisabled = false;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = true;
      this.isCANCELDisabled = true;

      this.PID_RECEIPT_NO = "";
      this.PID_RECEIPT_DATE = "";
      this.PID_CUSTOMER = "";
      this.PID_PROPOSAL_NO = "";
      this.PID_POLICY_NO = "";
      this.PID_RECEIPT_AMT = "";
      this.PID_TIME_SLAB = "";
      this.PID_CONFIRM_AMT = "";
      this.PID_CONFIRM_DATE = "";
      this.PID_RV_NO = "";
      this.PID_BAL_TYPE = "";
      this.PID_AGT_CODE = "";

      this.PID_RECEIPT_AMT = "";
      this.PID_AVAILABLE_AMT = "";
      this.RFD_PV_NO = "";
      this.RFD_TYPE = 0;
    }
    if (Status == 'LOAD') {
      this.isNEWDisabled = false;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = true;
      this.isCANCELDisabled = true;

      // this.PID_RECEIPT_NO = "";
      // this.PID_RECEIPT_DATE = "";
      // this.PID_CUSTOMER = "";
      // this.PID_PROPOSAL_NO = "";
      // this.PID_POLICY_NO = "";
      // this.PID_RECEIPT_AMT = "";
      // this.PID_TIME_SLAB = "";
      // this.PID_CONFIRM_AMT = "";
      // this.PID_CONFIRM_DATE = "";
      // this.PID_RV_NO = "";
      // this.PID_BAL_TYPE = "";
      // this.PID_AGT_CODE = "";

      this.RFD_AMT_CLS = "form-group";
      this.RFD_CANCELLATION_FEE_CLS = "form-group";
      this.RFD_RECOVERY_FEE_CLS = "form-group";
      this.RFD_ADVICE_REF_CLS = "form-group";

    }
  }

  private setPIDReceiptNo = function (index, ID) {

    this.getPIDDetailsByID(ID);
    //this.FormButtonStatusChange('EDIT');

  }

  getPIDDetailsByID(ID) {

    this.PIDDetailsService.getPIDDetails(ID)
      .subscribe((data) => {
        console.log(data);

        let obj: IPID = JSON.parse(JSON.stringify(data));

        this.PID_RECEIPT_NO = obj.PidReceiptNo,
          this.PID_RECEIPT_AMT = obj.PidReceiptAmt.toLocaleString(),
          this.PID_RECEIPT_DATE = obj.PidReceiptDate.toString(),
          this.PID_PROPOSAL_NO = obj.PidProposalNo.toString(),
          this.PID_POLICY_NO = obj.PidPolicyNo.toString(),
          this.PID_CUSTOMER = obj.PidCustomerName.toString(),
          this.PID_AVAILABLE_AMT = obj.PidAvailableAmt.toString()
        this.PID_AGT_CODE = obj.PidAgtCode.toString()

      });
  }


  //--------------Check Date when Save--------------------------------------------------
  SetDateFormat(vDate): Date {
    var moment = require('moment');

    // console.log('SetDateFormat');
    // console.log(vDate);

    if (vDate == undefined || vDate == '') {//alert(vDate);
      this.rtnDate = moment('01/01/1900'.toString()).format('DD/MM/YYYY');
    } else {
      this.rtnDate = moment(vDate).format('DD/MM/YYYY');
    }
    return this.rtnDate;
  }
  //------------------------------------------------------------------------------------

  //-------------Check Date when Retrive------------------------------------------------
  SetDateFormatNew(vDate): Date {
    var moment = require('moment');

    // console.log('SetDateFormatNew');
    // console.log(vDate);

    if ((vDate == '01/01/2000 12:00:00 AM') || (vDate == '01/01/2000 00:00:00') || (moment(vDate.toString().substr(0, 10), 'DD/MM/YYYY').toDate() == moment('01/01/1900 00:00:00'.toString().substr(0, 10), 'DD/MM/YYYY').toDate()) || (vDate == '01/01/1900 12:00:00 AM') || (vDate == '01/01/1900 00:00:00')) {//alert(vDate);
      this.rtnDate = null;//moment('01/01/1900'.toString()).format('DD/MM/YYYY');
    } else {
      this.rtnDate = moment(vDate.toString().substr(0, 10), 'DD/MM/YYYY').toDate();// moment(vDate).format('DD/MM/YYYY');
    }
    return this.rtnDate;
  }
  //------------------------------------------------------------------------------------

  SaveRecord() {

    try {

      this.RFD_AMT_CLS = "form-group";
      this.RFD_CANCELLATION_FEE_CLS = "form-group";
      this.RFD_RECOVERY_FEE_CLS = "form-group";
      this.RFD_REFUND_DATE_CLS = "form-group";

      if (this.RFD_REFUND_DATE == undefined) {
        this.RFD_REFUND_DATE_CLS = "has-error";
        return;
      } else {
        this.RFD_REFUND_DATE_CLS = "form-group"; //AgentTypeClass
      }

      if (this.RFD_TYPE == 0) {
        this.RFD_TYPE_CLS = "has-error";
        return;
      } else {
        this.RFD_TYPE_CLS = "form-group"; //AgentTypeClass
      }

      if (this.RFD_AMT == "" || Number(this.RFD_AMT) == NaN || Number(this.RFD_AMT).toString() == 'NaN') {
        this.RFD_AMT_CLS = "has-error";
        return;
      } else {
        this.RFD_AMT_CLS = "form-group"; //AgentTypeClass
      }

      if (this.RFD_CANCELLATION_FEE == "" || Number(this.RFD_CANCELLATION_FEE) == NaN || Number(this.RFD_CANCELLATION_FEE).toString() == 'NaN') {
        this.RFD_CANCELLATION_FEE_CLS = "has-error";
        return;
      } else {
        this.RFD_CANCELLATION_FEE_CLS = "form-group"; //AgentTypeClass
      }

      if (this.RFD_RECOVERY_FEE == "" || Number(this.RFD_RECOVERY_FEE) == NaN || Number(this.RFD_RECOVERY_FEE).toString() == 'NaN') {
        this.RFD_RECOVERY_FEE_CLS = "has-error";
        return;
      } else {
        this.RFD_RECOVERY_FEE_CLS = "form-group"; //AgentTypeClass
      }

      if (this.RFD_AMT > this.PID_AVAILABLE_AMT) {
        alert('Refund Amount Cannot be Exceeded than the Available Amount..');
        return;
      } 

      let obj: IRefund = {
        RfdId: this.RFD_ID,
        RfdReceiptNo: this.PID_RECEIPT_NO,
        RfdRefundDate: this.SetDateFormat(this.RFD_REFUND_DATE).toString(),
        RfdType: this.RFD_TYPE,
        RfdAmt: parseFloat(this.RFD_AMT.toString()),
        RfdPercentage: this.RFD_PERCENTAGE,
        RfdBy: this.RFD_BY,
        RfdReason: this.RFD_REASON,
        RfdAgtCode: this.PID_AGT_CODE,
        RfdProcessInd: this.RFD_PROCESS_IND,
        RfdRvNo: this.RFD_RV_NO,
        RfdPvNo: this.RFD_PV_NO,
        RfdBalType: this.RFD_BAL_TYPE,
        RfdCreatedBy: this.User.UserName,
        RfdStatus: 1,
        RfdProposalNo: this.PID_PROPOSAL_NO,
        RfdPolicyNo: this.PID_POLICY_NO,
        RfdCancellationFee: parseFloat(this.RFD_CANCELLATION_FEE.toString()),//this.RFD_CANCELLATION_FEE,
        RfdRecoveryFee: parseFloat(this.RFD_RECOVERY_FEE.toString())//this.RFD_RECOVERY_FEE

      }
      console.log(obj);

      this.RefundService.saveRefund(obj).subscribe((data: any) => {
        console.log(data);

        //this.getLevels();




        //this.RFD_PV_NO = data.substring(0 + 1, data.indexOf("|"));
        //this.RFD_PV_NO = data.substring(data.indexOf("|") + 1, data.indexOf("||"));


        let body = data.text()

        this.RFD_PV_NO = body.substring(1, 9);



        if (data.toString().replace(/"/g, '') == "ERROR") {
          console.log("Error saving Designation");
          alert("Error Occured.");
        } else {
          console.log("Designation Successfully Saved.");
          alert("Successfully Saved.");
        }
      },
        (err) => {
          console.log(err);
          console.log("Error saving Designation");
          alert("Error Occured.");
        },
        () => console.log('done'));

    } catch (error) {

    }


    this.FormButtonStatusChange('SAVE');

  }


  SearchRecord() {

    let obj: IPIDSearch = {

      PID_RECEIPT_NO: this.PID_RECEIPT_NO_SEARCH,
      PID_RECEIPT_DATE: this.PID_RECEIPT_DATE,
      PID_CUSTOMER: this.PID_CUSTOMER,
      PID_PROPOSAL_NO: this.PID_PROPOSAL_NO_SEARCH,
      PID_POLICY_NO: this.PID_POLICY_NO_SEARCH,
      PID_RECEIPT_AMT: this.PID_RECEIPT_AMT,
      PID_TIME_SLAB: this.PID_TIME_SLAB,
      PID_CONFIRM_AMT: this.PID_CONFIRM_AMT,
      PID_CONFIRM_DATE: this.PID_CONFIRM_DATE,
      PID_RV_NO: this.PID_RV_NO,
      PID_BAL_TYPE: this.PID_BAL_TYPE,
      PID_AGT_CODE: this.PID_AGT_CODE_SEARCH

    }

    console.log(obj);

    this.PIDSearchService.GetPIDDetails(obj)
      .subscribe((data) => {

        this.PIDList = data;

        console.log(JSON.stringify(data));

        if (this.PIDList.length == 0) {
          alert('No Record Found....');
          this.PIDList = null;
          return;
        }

      },
      (err) => console.log(err));
  }
}
