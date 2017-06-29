import { Component, OnInit, NgZone, Inject, EventEmitter } from '@angular/core';

import { BranchService } from '../../shared/services/branch/branch.service';
import { IBranch } from '../../shared/models/Branch.models';

import { BankService } from '../../shared/services/bank/bank.service';
import { IBank } from '../../shared/models/bank.models';

import { BankBranchService } from '../../shared/services/bankBranch/bankBranch.service';
import { IBankBranch } from '../../shared/models/BankBranch.models';

import { AgentTypeService } from '../../shared/services/AgentType/AgentType.service';
import { IAgentType } from '../../shared/models/AgentType.models';

import { AgentCodeService } from '../../shared/services/AgentCode/AgentCode.service';
import { IAgentCode } from '../../shared/models/AgentCode.models';

import { AgentService } from '../../shared/services/Agent/Agent.service';
import { IAgent } from '../../shared/models/Agent.models';

import { IAgentSearch } from '../../shared/models/AgentSearch';

import { UploadDocTypeService } from '../../shared/services/UploadDocType/upload-doc-type.service';
import { IUploadDocType } from '../../shared/models/UploadDocType.models';

import { LevelService } from '../../shared/services/Level/level.service';
import { ILevel } from '../../shared/models/Level.models';


import { DatePipe } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { IUser } from '../../shared/models/user/user.model';

import { UUID } from 'angular2-uuid';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';

import { URL_CONST } from '../../shared/config/url.constants';

declare var jQuery: any;

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {

  User: IUser;

  Id: number = 0;
  Code: string = '';
  Description: string = '';

  branchList: Array<Object> = [];
  bankList: Array<Object> = [];
  bankBranchList: Array<IBankBranch> = [];
  AgentTypeList: Array<IAgentType> = [];
  AgentCodeList: Array<IAgentCode> = [];
  AgentSearchList: Array<IAgentSearch> = [];
  AgentLevelList: Array<ILevel> = [];
  UploadDocTypeList: Array<IUploadDocType> = [];

  SelectedBranchID: string = '';
  SelectedBankID: string = '';
  SelectedAgentTypeID: string = '';

  //------------Agent------------
  AGT_ID: string = '';
  AGT_CODE: string = '';
  AGT_TYPE_ID: number = 0;
  AGT_CODE_ID: number = 0;
  AGT_MDRT_STATUS: number = 0;
  AGT_MDRT_YEAR: number = 0;
  AGT_SYSTEM_ID: string = '';
  AGT_SUB_CODE: string = '';
  AGT_LINE_OF_BUSINESS: number = 0;
  AGT_CHANNEL: string = '';
  AGT_LEVEL: number = 0;
  AGT_SUPER_CODE: string = '';
  AGT_TITLE: string = '';
  AGT_FIRST_NAME: string = '';
  AGT_LAST_NAME: string = '';
  AGT_ADD1: string = '';
  AGT_ADD2: string = '';
  AGT_ADD3: string = '';
  AGT_NIC_NO: string = '';
  AGT_DOB: Date;
  AGT_MOBILE: string = '';
  AGT_TEL_NO: string = '';
  AGT_FAX_NO: string = '';
  AGT_BRANCH_CODE: string = '';
  AGT_BANK_ID: number = 0;
  AGT_BANK_BRANCH_ID: number = 0;
  AGT_BANK_ACC_NO: string = '';
  AGT_ID_ISSUED: number = 0;
  AGT_ID_ISSUED_DATE: Date;
  AGT_APPOINT_DATE: Date;
  AGT_SLII_EXAM: number = 0;
  AGT_SLII_EXAM_DATE: Date;
  AGT_AGMT_RECEIVED: number;
  AGT_AGMT_DATE: Date;
  AGT_APP_RECEIVED: number;
  AGT_APP_RECEIVED_DATE: Date;
  AGT_TRNS_BRANCH_CODE: string;
  AGT_TRNS_BRANCH_DATE: Date;
  AGT_STOP_COMM_DATE: Date;
  AGT_STOP_COMM_REASON: string;
  AGT_RELEASE_COMM_DATE: Date;
  AGT_RELEASE_COMM_REASON: string;
  AGT_CUSTOMER_COMPLAIN: string;
  AGT_TERMINATE_NOTICE_DATE: Date;
  AGT_TERMINATE_DATE: Date;
  AGT_TERMINATE_REASON: string;
  AGT_BLACK_LISTED_DATE: Date;
  AGT_DUES_TO_COMPANY: string;
  AGT_REJOINED_DATE: Date;
  AGT_REMARKS: string;
  AGT_BUSINESS_TYPE: number;
  AGT_LEVEL_CODE: string;
  AGT_LEADER_CODE: string;
  AGT_STATUS: number;
  AGT_TERMINATE_STATUS: number;
  AGT_STOP_COMM_STATUS: number;
  AGT_ISS_STATUS: number;
  AGT_ISS_AMOUNT: number;
  AGT_ISS_GIVEN_DATE: Date;
  AGT_ISS_CLOSE_DATE: Date;
  AGT_RETAINER_STATUS: number;
  AGT_RETAINER_AMOUNT: number;
  AGT_RETAINER_GIVEN_DATE: Date;
  AGT_RETAINER_CLOSE_DATE: Date;
  AGT_LEADER_AGENT_CODE_V: string;
  AGT_LEADER_LEADER_CODE_V: string;
  AGT_LEADER_AGENT_CODE_H: string;
  AGT_LEADER_LEADER_CODE_H: string;
  AGT_CREATED_BY: string;
  //-----------------------------

  isAgentDetailsValid: boolean = true;


  //------------------For field Validation-------------
  AGT_TYPE_ID_CLS: string = '';
  AGT_CODE_ID_CLS: string = '';
  AGT_MDRT_STATUS_CLS: string = '';
  AGT_MDRT_YEAR_CLS: string = '';
  AGT_SYSTEM_ID_CLS: string = '';
  AGT_SUB_CODE_CLS: string = '';
  AGT_LINE_OF_BUSINESS_CLS: string = '';
  AGT_CHANNEL_CLS: string = '';
  AGT_LEVEL_CLS: string = '';
  AGT_SUPER_CODE_CLS: string = '';
  AGT_TITLE_CLS: string = '';
  AGT_FIRST_NAME_CLS: string = '';
  AGT_LAST_NAME_CLS: string = '';
  AGT_ADD1_CLS: string = '';
  AGT_ADD2_CLS: string = '';
  AGT_ADD3_CLS: string = '';
  AGT_NIC_NO_CLS: string = '';
  AGT_DOB_CLS: string = '';
  AGT_MOBILE_CLS: string = '';
  AGT_TEL_NO_CLS: string = '';
  AGT_FAX_NO_CLS: string = '';
  AGT_BRANCH_CODE_CLS: string = '';
  AGT_BANK_ID_CLS: string = '';
  AGT_BANK_BRANCH_ID_CLS: string = '';
  AGT_BANK_ACC_NO_CLS: string = '';
  AGT_ID_ISSUED_CLS: string = '';
  AGT_ID_ISSUED_DATE_CLS: string = '';
  AGT_APPOINT_DATE_CLS: string = '';
  AGT_SLII_EXAM_CLS: string = '';
  AGT_SLII_EXAM_DATE_CLS: string = '';
  AGT_AGMT_RECEIVED_CLS: string = '';
  AGT_AGMT_DATE_CLS: string = '';
  AGT_APP_RECEIVED_CLS: string = '';
  AGT_APP_RECEIVED_DATE_CLS: string = '';
  AGT_TRNS_BRANCH_CODE_CLS: string;
  AGT_TRNS_BRANCH_DATE_CLS: string = '';
  AGT_STOP_COMM_DATE_CLS: string = '';
  AGT_STOP_COMM_REASON_CLS: string = '';
  AGT_RELEASE_COMM_DATE_CLS: string = '';
  AGT_RELEASE_COMM_REASON_CLS: string;
  AGT_CUSTOMER_COMPLAIN_CLS: string;
  AGT_TERMINATE_NOTICE_DATE_CLS: string = '';
  AGT_TERMINATE_DATE_CLS: string = '';
  AGT_TERMINATE_REASON_CLS: string;
  AGT_BLACK_LISTED_DATE_CLS: string = '';
  AGT_DUES_TO_COMPANY_CLS: string;
  AGT_REJOINED_DATE_CLS: string = '';
  AGT_REMARKS_CLS: string;
  AGT_BUSINESS_TYPE_CLS: string;
  AGT_LEVEL_CODE_CLS: string;
  AGT_LEADER_CODE_CLS: string;

  AGT_STATUS_CLS: string = '';
  AGT_TERMINATE_STATUS_CLS: string = '';
  AGT_STOP_COMM_STATUS_CLS: string = '';
  AGT_ISS_STATUS_CLS: string = '';
  AGT_ISS_AMOUNT_CLS: string = '';
  AGT_ISS_GIVEN_DATE_CLS: string = '';
  AGT_ISS_CLOSE_DATE_CLS: string = '';
  AGT_RETAINER_STATUS_CLS: string = '';
  AGT_RETAINER_AMOUNT_CLS: string = '';
  AGT_RETAINER_GIVEN_DATE_CLS: string = '';
  AGT_RETAINER_CLOSE_DATE_CLS: string = '';
  AGT_LEADER_AGENT_CODE_V_CLS: string = '';
  AGT_LEADER_LEADER_CODE_V_CLS: string = '';
  AGT_LEADER_AGENT_CODE_H_CLS: string = '';
  AGT_LEADER_LEADER_CODE_H_CLS: string = '';
  //----------------End field Validation-------------


  //Agent Search Cols--------------------------------
  AGT_SEARCH_ID: string;
  AGT_SEARCH_CODE: string;
  AGT_SEARCH_NAME: string;
  AGT_SEARCH_ADDRESS: string;
  AGT_SEARCH_NIC_NO: string;
  AGT_SEARCH_MOBILE: string;
  //-------------------------------------------------

  UploadDocTypeId: number;
  uploadDocTypeList: Array<IUploadDocType> = [];
  DocUploadUrl: any;

  uploaderOptions: NgUploaderOptions;
  response: any;
  sizeLimit: number = 10000000; // 10MB
  previewData: any;
  errorMessage: string;
  inputUploadEvents: EventEmitter<string>;



  datepickerOpts = {
    format: 'dd/mm/yyyy'
  }
  constructor(private BranchService: BranchService, private BankService: BankService,
    private BankBranchService: BankBranchService, private AgentTypeService: AgentTypeService,
    private AgentCodeService: AgentCodeService, private AgentService: AgentService,
    private LevelService: LevelService, private UploadDocTypeService: UploadDocTypeService,
    moment: MomentModule,
    @Inject(NgZone) private zone: NgZone) {



    this.inputUploadEvents = new EventEmitter<string>();
  }


  ngOnInit() {
    try {

      this.getBranches();
      this.getBanks();
      this.getAgentTypes();
      this.getLevels();
      this.clearValues();

      this.getUploadDocTypes();

      this.User = JSON.parse(localStorage.getItem('currentMRPUser'));

    } catch (error) {
      alert('Error Ocurred...!');
    }

  }

  startUpload() {
    this.inputUploadEvents.emit('startUpload');
  }

  beforeUpload(uploadingFile: UploadedFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.errorMessage = 'File is too large!';
    }
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        // this.response = data;
        if (data && data.response) {
          // this.response = JSON.parse(data.response);
          console.log(JSON.parse(data.response));
          // this.showSuccess("Document Successfully Uploaded.");

        }
      });
    });
  }

  handlePreviewData(data: any) {
    this.previewData = data;
  }


    onSelectOfUploadDocTypeId(docTypeId) {



    this.UploadDocTypeId = docTypeId;
    console.log('doc type-' + this.UploadDocTypeId);


    // this.DocUploadUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL_CONST.URL_PREFIX + 'api/Main/UploadDocument');
    //this.DocUploadUrl = 'http://localhost:46817/api/Main/UploadDocument?sTempSeqId=' +'aaaaasas';
    // this.DocUploadUrl = URL_CONST.URL_PREFIX + 'api/Main/UploadDocument?sTempSeqId=' + this.TempSeqId;
 //api/UploadDoc/UploadDocument?sTempSeqId={sTempSeqId} 	



    this.DocUploadUrl = URL_CONST.URL_PREFIX + 'api/UploadDoc/UploadDocument?sTempSeqId=' +'aaaaasas';



    alert('awa awa');

    console.log('url - ' + this.DocUploadUrl);

    this.uploaderOptions = new NgUploaderOptions({
      url: this.DocUploadUrl,
      filterExtensions: true,
      allowedExtensions: ['jpg', 'pdf'],
      data: { tempSeqId: '123', docTypeId: this.UploadDocTypeId },
      autoUpload: false,
      fieldName: 'file',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });


    console.log('options - ' + JSON.stringify(this.uploaderOptions));
  }




  getUploadDocTypes() {
    this.UploadDocTypeService.getUploadDocTypes()
      .subscribe((data) => {

        this.UploadDocTypeList = data;
        console.log(JSON.stringify(data));
      },
      (err) => console.log(err));
  }

  getLevels() {
    this.LevelService.getLevel()
      .subscribe((data) => {

        this.AgentLevelList = data;
        console.log(JSON.stringify(data));
      },
      (err) => console.log(err));
  }

  myFunc(FName, Lname) {
    alert(FName + Lname);
  }

  getBranches() {
    this.BranchService.getBranch()
      .subscribe((data) => {

        this.branchList = data;
        //console.log(JSON.stringify(data));
      },
      (err) => console.log(err));
  }

  getBanks() {
    this.BankService.getBanks()
      .subscribe((data) => {

        this.bankList = data;
      },
      (err) => console.log(err));
  }

  SaveRecord() {
    try {



      // this.validateFields();
      // if (!this.isAgentDetailsValid) {
      //   return;
      // }



      var moment = require('moment');

      var FormattedAGT_DOB = moment(this.AGT_DOB).format('DD/MM/YYYY');
      var FormattedAGT_ID_ISSUED_DATE = moment(this.AGT_ID_ISSUED_DATE).format('DD/MM/YYYY');
      var FormattedAGT_APPOINT_DATE = moment(this.AGT_APPOINT_DATE).format('DD/MM/YYYY');
      var FormattedAGT_SLII_EXAM_DATE = moment(this.AGT_SLII_EXAM_DATE).format('DD/MM/YYYY');

      var FormattedAGT_AGMT_DATE = moment(this.AGT_AGMT_DATE).format('DD/MM/YYYY');
      var FormattedAGT_APP_RECEIVED_DATE = moment(this.AGT_APP_RECEIVED_DATE).format('DD/MM/YYYY');
      var FormattedAGT_STOP_COMM_DATE = moment(this.AGT_STOP_COMM_DATE).format('DD/MM/YYYY');
      var FormattedAGT_RELEASE_COMM_DATE = moment(this.AGT_RELEASE_COMM_DATE).format('DD/MM/YYYY');
      var FormattedAGT_TERMINATE_NOTICE_DATE = moment(this.AGT_TERMINATE_NOTICE_DATE).format('DD/MM/YYYY');
      var FormattedAGT_TERMINATE_DATE = moment(this.AGT_TERMINATE_DATE).format('DD/MM/YYYY');
      var FormattedAGT_BLACK_LISTED_DATE = moment(this.AGT_BLACK_LISTED_DATE).format('DD/MM/YYYY');
      var FormattedAGT_REJOINED_DATE = moment(this.AGT_REJOINED_DATE).format('DD/MM/YYYY');

      var FormattedAGT_ISS_GIVEN_DATE = moment(this.AGT_ISS_GIVEN_DATE).format('DD/MM/YYYY');
      var FormattedAGT_ISS_CLOSE_DATE = moment(this.AGT_ISS_CLOSE_DATE).format('DD/MM/YYYY');
      var FormattedAGT_RETAINER_GIVEN_DATE = moment(this.AGT_RETAINER_GIVEN_DATE).format('DD/MM/YYYY');
      var FormattedAGT_RETAINER_CLOSE_DATE = moment(this.AGT_RETAINER_CLOSE_DATE).format('DD/MM/YYYY');

      var FormattedAGT_TRNS_BRANCH_DATE = moment(this.AGT_TRNS_BRANCH_DATE).format('DD/MM/YYYY');


      let objAgent: IAgent = {
        AGT_ID: this.AGT_ID,
        AGT_CODE: this.AGT_CODE,
        AGT_CODE_ID: this.AGT_CODE_ID,
        AGT_TYPE_ID: this.AGT_TYPE_ID,
        AGT_MDRT_STATUS: this.AGT_MDRT_STATUS,
        AGT_MDRT_YEAR: this.AGT_MDRT_YEAR,
        AGT_SYSTEM_ID: this.AGT_SYSTEM_ID,
        AGT_SUB_CODE: this.AGT_SUB_CODE,
        AGT_LINE_OF_BUSINESS: this.AGT_LINE_OF_BUSINESS,
        AGT_CHANNEL: this.AGT_CHANNEL,
        AGT_LEVEL: this.AGT_LEVEL,
        AGT_SUPER_CODE: this.AGT_SUPER_CODE,
        AGT_TITLE: this.AGT_TITLE,
        AGT_FIRST_NAME: this.AGT_FIRST_NAME,
        AGT_LAST_NAME: this.AGT_LAST_NAME,
        AGT_ADD1: this.AGT_ADD1,
        AGT_ADD2: this.AGT_ADD2,
        AGT_ADD3: this.AGT_ADD3,
        AGT_NIC_NO: this.AGT_NIC_NO,
        AGT_DOB: FormattedAGT_DOB,
        AGT_MOBILE: this.AGT_MOBILE,
        AGT_TEL_NO: this.AGT_TEL_NO,
        AGT_FAX_NO: this.AGT_FAX_NO,
        AGT_BRANCH_CODE: this.AGT_BRANCH_CODE,
        AGT_BANK_ID: this.AGT_BANK_ID,
        AGT_BANK_BRANCH_ID: this.AGT_BANK_BRANCH_ID,
        AGT_BANK_ACC_NO: this.AGT_BANK_ACC_NO,
        AGT_ID_ISSUED: this.AGT_ID_ISSUED,
        AGT_ID_ISSUED_DATE: FormattedAGT_ID_ISSUED_DATE,
        AGT_APPOINT_DATE: FormattedAGT_APPOINT_DATE,
        AGT_SLII_EXAM: this.AGT_SLII_EXAM,
        AGT_SLII_EXAM_DATE: FormattedAGT_SLII_EXAM_DATE,
        AGT_AGMT_RECEIVED: this.AGT_AGMT_RECEIVED,
        AGT_AGMT_DATE: FormattedAGT_AGMT_DATE,
        AGT_APP_RECEIVED: this.AGT_APP_RECEIVED,
        AGT_APP_RECEIVED_DATE: FormattedAGT_APP_RECEIVED_DATE,
        AGT_TRNS_BRANCH_CODE: this.AGT_TRNS_BRANCH_CODE,
        AGT_TRNS_BRANCH_DATE: FormattedAGT_TRNS_BRANCH_DATE,
        AGT_STOP_COMM_DATE: FormattedAGT_STOP_COMM_DATE,
        AGT_STOP_COMM_REASON: this.AGT_STOP_COMM_REASON,
        AGT_RELEASE_COMM_DATE: FormattedAGT_RELEASE_COMM_DATE,
        AGT_RELEASE_COMM_REASON: this.AGT_RELEASE_COMM_REASON,
        AGT_CUSTOMER_COMPLAIN: this.AGT_CUSTOMER_COMPLAIN,
        AGT_TERMINATE_NOTICE_DATE: FormattedAGT_TERMINATE_NOTICE_DATE,
        AGT_TERMINATE_DATE: FormattedAGT_TERMINATE_DATE,
        AGT_TERMINATE_REASON: this.AGT_TERMINATE_REASON,
        AGT_BLACK_LISTED_DATE: FormattedAGT_BLACK_LISTED_DATE,
        AGT_DUES_TO_COMPANY: this.AGT_DUES_TO_COMPANY,
        AGT_REJOINED_DATE: FormattedAGT_REJOINED_DATE,
        AGT_REMARKS: this.AGT_REMARKS,
        AGT_BUSINESS_TYPE: this.AGT_BUSINESS_TYPE,
        AGT_LEVEL_CODE: this.AGT_LEVEL_CODE,
        AGT_LEADER_CODE: this.AGT_LEADER_CODE,
        AGT_STATUS: this.AGT_STATUS,
        AGT_TERMINATE_STATUS: this.AGT_TERMINATE_STATUS,
        AGT_STOP_COMM_STATUS: this.AGT_STOP_COMM_STATUS,
        AGT_ISS_STATUS: this.AGT_ISS_STATUS,
        AGT_ISS_AMOUNT: this.AGT_ISS_AMOUNT,
        AGT_ISS_GIVEN_DATE: FormattedAGT_ISS_GIVEN_DATE,
        AGT_ISS_CLOSE_DATE: FormattedAGT_ISS_CLOSE_DATE,
        AGT_RETAINER_STATUS: this.AGT_RETAINER_STATUS,
        AGT_RETAINER_AMOUNT: this.AGT_RETAINER_AMOUNT,
        AGT_RETAINER_GIVEN_DATE: FormattedAGT_RETAINER_GIVEN_DATE,
        AGT_RETAINER_CLOSE_DATE: FormattedAGT_RETAINER_CLOSE_DATE,
        AGT_LEADER_AGENT_CODE_V: this.AGT_LEADER_AGENT_CODE_V,
        AGT_LEADER_LEADER_CODE_V: this.AGT_LEADER_LEADER_CODE_V,
        AGT_LEADER_AGENT_CODE_H: this.AGT_LEADER_AGENT_CODE_H,
        AGT_LEADER_LEADER_CODE_H: this.AGT_LEADER_LEADER_CODE_H,
        AGT_CREATED_BY: this.User.UserName//this.AGT_CREATED_BY

      }


      console.log(objAgent);
      console.log(JSON.stringify(objAgent));

      this.AgentService.SaveAgent(objAgent).subscribe((data: any) => {
        console.log(data);

        //this.getBanks();

        if (data.toString().replace(/"/g, '') != "Successfully Saved") {
          alert(data);
          return;
        } else {
          alert(data);
          return;
        }
      },
        (err) => {
          console.log(err);
          console.log("Error saving agent");
        },
        () => console.log('done'));

    } catch (error) {

    }

  }

  getBankBranch(bankId) {
    this.BankBranchService.getBankBranch(bankId)
      .subscribe((data) => {
        console.log(data);

        this.bankBranchList = data;
      },
      (err) => console.log(err));
  }

  onSelectOfBankId(bankId) {

    this.getBankBranch(bankId);
  }

  getAgentTypes() {
    try {
      this.AgentTypeService.getAgents()
        .subscribe((data) => {

          this.AgentTypeList = data;
        },
        (err) => console.log(err));

    } catch (error) {

    }

  }

  onSelectOfTypeID(TypeID) {
    this.getAgentCodeByTypeID(TypeID);
  }

  getAgentCodeByTypeID(TypeID) {

    this.AgentCodeService.getAgentCodeByTypeID(TypeID)
      .subscribe((data) => {
        console.log(data);

        this.AgentCodeList = data;
      },
      (err) => console.log(err));
  }

  //----------Start Validate fields-------------
  //----------Start Validate fields-------------
  public validateFields() {

    this.isAgentDetailsValid = true;

    if (this.AGT_TYPE_ID == 0) {//column name
      this.AGT_TYPE_ID_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TYPE_ID_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_CODE_ID == 0) {
      this.AGT_CODE_ID_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_CODE_ID_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_MDRT_STATUS == 0) {
      this.AGT_MDRT_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_MDRT_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_MDRT_YEAR == 0) {
      this.AGT_MDRT_YEAR_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_MDRT_YEAR_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_SYSTEM_ID == '') {
      this.AGT_SYSTEM_ID_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SYSTEM_ID_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_SUB_CODE == '') {
      this.AGT_SUB_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SUB_CODE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_LINE_OF_BUSINESS == 0) {
      this.AGT_LINE_OF_BUSINESS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_LINE_OF_BUSINESS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_CHANNEL == '') {
      this.AGT_CHANNEL_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_CHANNEL_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_LEVEL == 0) {
      this.AGT_LEVEL_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_LEVEL_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_LEADER_CODE == '') {
      this.AGT_LEADER_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_LEADER_CODE_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_SUPER_CODE == '') {
      this.AGT_SUPER_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SUPER_CODE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TITLE == '') {
      this.AGT_TITLE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TITLE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_FIRST_NAME == '') {
      this.AGT_FIRST_NAME_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_FIRST_NAME_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_LAST_NAME == '') {
      this.AGT_LAST_NAME_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_LAST_NAME_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ADD1 == '') {
      this.AGT_ADD1_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ADD1_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ADD2 == '') {
      this.AGT_ADD2_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ADD2_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ADD3 == '') {
      this.AGT_ADD3_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ADD3_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_NIC_NO == '') {
      this.AGT_NIC_NO_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_NIC_NO_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_DOB == null) {
      this.AGT_DOB_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_DOB_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_MOBILE == '') {
      this.AGT_MOBILE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_MOBILE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TEL_NO == '') {
      this.AGT_TEL_NO_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TEL_NO_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_FAX_NO == '') {
      this.AGT_FAX_NO_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_FAX_NO_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_BRANCH_CODE == '') {
      this.AGT_BRANCH_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BRANCH_CODE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_BANK_ID == 0) {
      this.AGT_BANK_ID_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BANK_ID_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_BANK_BRANCH_ID == 0) {
      this.AGT_BANK_BRANCH_ID_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BANK_BRANCH_ID_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_BANK_ACC_NO == '') {
      this.AGT_BANK_ACC_NO_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BANK_ACC_NO_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ID_ISSUED == 0) {
      this.AGT_ID_ISSUED_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ID_ISSUED_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_LEADER_CODE == undefined || this.AGT_LEADER_CODE == null) {
      this.AGT_LEADER_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_LEADER_CODE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ID_ISSUED_DATE == null) {
      this.AGT_ID_ISSUED_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ID_ISSUED_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_APPOINT_DATE == null) {
      this.AGT_APPOINT_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_APPOINT_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_SLII_EXAM == 0) {
      this.AGT_SLII_EXAM_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SLII_EXAM_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_SLII_EXAM_DATE == null) {
      this.AGT_SLII_EXAM_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SLII_EXAM_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_AGMT_RECEIVED == undefined || this.AGT_AGMT_DATE == null) {
      this.AGT_AGMT_RECEIVED_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_AGMT_RECEIVED_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_APP_RECEIVED == undefined || this.AGT_APP_RECEIVED_DATE == null) {
      this.AGT_APP_RECEIVED_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_APP_RECEIVED_CLS = "form-group"; //AgentTypeClass
    }

    // if (this.AGT_APP_RECEIVED == 0 ) {
    //   this.AGT_APP_RECEIVED_CLS = "has-error";
    //   this.isAgentDetailsValid = false;
    //   } else {
    //   this.AGT_APP_RECEIVED_CLS = "form-group"; //AgentTypeClass
    // }

    // if (this.AGT_APP_RECEIVED_DATE == null ) {
    //   this.AGT_APP_RECEIVED_DATE_CLS = "has-error";
    //   this.isAgentDetailsValid = false;
    //   } else {
    //   this.AGT_APP_RECEIVED_DATE_CLS = "form-group"; //AgentTypeClass
    // }

    if (this.AGT_TRNS_BRANCH_CODE == undefined || this.AGT_TRNS_BRANCH_DATE == null) {
      this.AGT_TRNS_BRANCH_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TRNS_BRANCH_CODE_CLS = "form-group"; //AgentTypeClass
    }

    // if (this.AGT_TRNS_BRANCH_CODE == '' ) {
    //   this.AGT_TRNS_BRANCH_CODE_CLS = "has-error";
    //   this.isAgentDetailsValid = false;
    //   } else {
    //   this.AGT_TRNS_BRANCH_CODE_CLS = "form-group"; //AgentTypeClass
    // }

    // if (this.AGT_TRNS_BRANCH_DATE == null ) {
    //   this.AGT_TRNS_BRANCH_DATE_CLS = "has-error";
    //   this.isAgentDetailsValid = false;
    //   } else {
    //   this.AGT_TRNS_BRANCH_DATE_CLS = "form-group"; //AgentTypeClass
    // }

    if (this.AGT_STOP_COMM_DATE == null) {
      this.AGT_STOP_COMM_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_STOP_COMM_DATE_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_STOP_COMM_REASON == undefined || this.AGT_STOP_COMM_REASON == '') {
      this.AGT_STOP_COMM_REASON_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_STOP_COMM_REASON_CLS = "form-group"; //AgentTypeClass
    }



    if (this.AGT_RELEASE_COMM_DATE == null) {
      this.AGT_RELEASE_COMM_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RELEASE_COMM_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_RELEASE_COMM_REASON == undefined || this.AGT_RELEASE_COMM_REASON == '') {
      this.AGT_RELEASE_COMM_REASON_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RELEASE_COMM_REASON_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_CUSTOMER_COMPLAIN == undefined || this.AGT_CUSTOMER_COMPLAIN == '') {
      this.AGT_CUSTOMER_COMPLAIN_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_CUSTOMER_COMPLAIN_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TERMINATE_NOTICE_DATE == null) {
      this.AGT_TERMINATE_NOTICE_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TERMINATE_NOTICE_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TERMINATE_DATE == null) {
      this.AGT_TERMINATE_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TERMINATE_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TERMINATE_REASON == undefined || this.AGT_TERMINATE_REASON == '') {
      this.AGT_TERMINATE_REASON_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TERMINATE_REASON_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_BLACK_LISTED_DATE == null) {
      this.AGT_BLACK_LISTED_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BLACK_LISTED_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_DUES_TO_COMPANY == undefined || this.AGT_DUES_TO_COMPANY == '') {
      this.AGT_DUES_TO_COMPANY_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_DUES_TO_COMPANY_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_REJOINED_DATE == null) {
      this.AGT_REJOINED_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_REJOINED_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_REMARKS == undefined || this.AGT_REMARKS == '') {
      this.AGT_REMARKS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_REMARKS_CLS = "form-group"; //AgentTypeClass
    }


    if (this.AGT_BUSINESS_TYPE == undefined || this.AGT_BUSINESS_TYPE == 0) {
      this.AGT_BUSINESS_TYPE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_BUSINESS_TYPE_CLS = "form-group"; //AgentTypeClass
    }

    // if (this.AGT_LEVEL_CODE == undefined || this.AGT_LEVEL_CODE == '') {
    //   this.AGT_LEVEL_CODE_CLS = "has-error";
    //   this.isAgentDetailsValid = false;
    // } else {
    //   this.AGT_LEVEL_CODE_CLS = "form-group"; //AgentTypeClass AGT_SUPER_CODE
    // }

    if (this.AGT_SUPER_CODE == undefined || this.AGT_SUPER_CODE == '') {
      this.AGT_SUPER_CODE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_SUPER_CODE_CLS = "form-group"; //AgentTypeClass AGT_SUPER_CODE
    }

    if (this.AGT_STATUS == undefined || this.AGT_STATUS == 0) {
      this.AGT_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_TERMINATE_STATUS == undefined || this.AGT_TERMINATE_STATUS == 0) {
      this.AGT_TERMINATE_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_TERMINATE_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_STOP_COMM_STATUS == undefined || this.AGT_TERMINATE_STATUS == 0) {
      this.AGT_STOP_COMM_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_STOP_COMM_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ISS_STATUS == undefined || this.AGT_ISS_STATUS == 0) {
      this.AGT_ISS_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ISS_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ISS_AMOUNT == undefined || this.AGT_ISS_AMOUNT == 0) {
      this.AGT_ISS_AMOUNT_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ISS_AMOUNT_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ISS_GIVEN_DATE == undefined || this.AGT_ISS_GIVEN_DATE == null) {
      this.AGT_ISS_GIVEN_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ISS_GIVEN_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_ISS_CLOSE_DATE == undefined || this.AGT_ISS_CLOSE_DATE == null) {
      this.AGT_ISS_CLOSE_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_ISS_CLOSE_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_RETAINER_STATUS == undefined || this.AGT_RETAINER_STATUS == 0) {
      this.AGT_RETAINER_STATUS_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RETAINER_STATUS_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_RETAINER_AMOUNT == undefined || this.AGT_RETAINER_AMOUNT == 0) {
      this.AGT_RETAINER_AMOUNT_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RETAINER_AMOUNT_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_RETAINER_GIVEN_DATE == undefined || this.AGT_RETAINER_GIVEN_DATE == null) {
      this.AGT_RETAINER_GIVEN_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RETAINER_GIVEN_DATE_CLS = "form-group"; //AgentTypeClass
    }

    if (this.AGT_RETAINER_CLOSE_DATE == undefined || this.AGT_RETAINER_CLOSE_DATE == null) {
      this.AGT_RETAINER_CLOSE_DATE_CLS = "has-error";
      this.isAgentDetailsValid = false;
    } else {
      this.AGT_RETAINER_CLOSE_DATE_CLS = "form-group"; //AgentTypeClass
    }


  }
  //-----------End Validate fields--------------

  clearValues() {


    var moment = require('moment');

    this.AGT_ID = '';
    this.AGT_CODE = '';
    this.AGT_CODE_ID = 0;
    this.AGT_TYPE_ID = 0;
    this.AGT_MDRT_STATUS = null;
    this.AGT_MDRT_YEAR = null;
    this.AGT_SYSTEM_ID = 'AGT_SYSTEM_ID';
    this.AGT_SUB_CODE = 'AGT_SUB_CODE';
    this.AGT_LINE_OF_BUSINESS = 1;
    this.AGT_CHANNEL = 'AGT_CHANNEL';
    this.AGT_LEVEL = 1,
      this.AGT_SUPER_CODE = 'AGT_SUPER_CODE';
    this.AGT_TITLE = 'Mr';
    this.AGT_FIRST_NAME = 'AGT_FIRST_NAME';
    this.AGT_LAST_NAME = 'AGT_LAST_NAME';
    this.AGT_ADD1 = 'AGT_ADD1'
    this.AGT_ADD2 = 'AGT_ADD2';
    this.AGT_ADD3 = 'AGT_ADD3';
    this.AGT_NIC_NO = 'AGT_NIC_NO';
    this.AGT_DOB = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_MOBILE = 'AGT_MOBILE';
    this.AGT_TEL_NO = 'AGT_TEL_NO';
    this.AGT_FAX_NO = 'AGT_FAX_NO'
    this.AGT_BRANCH_CODE = 'KDY';
    this.AGT_BANK_ID = 1;
    this.AGT_BANK_BRANCH_ID = 1;
    this.AGT_BANK_ACC_NO = 'AGT_BANK_ACC_NO';
    this.AGT_ID_ISSUED = 1;
    this.AGT_ID_ISSUED_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_APPOINT_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_SLII_EXAM = 1;
    this.AGT_SLII_EXAM_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_AGMT_RECEIVED = 1;
    this.AGT_AGMT_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_APP_RECEIVED = 1;
    this.AGT_APP_RECEIVED_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_TRNS_BRANCH_CODE = 'HDO';
    this.AGT_TRNS_BRANCH_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_STOP_COMM_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_STOP_COMM_REASON = 'AGT_STOP_COMM_REASON';
    this.AGT_RELEASE_COMM_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_RELEASE_COMM_REASON = 'AGT_RELEASE_COMM_REASON';
    this.AGT_CUSTOMER_COMPLAIN = 'AGT_CUSTOMER_COMPLAIN';
    this.AGT_TERMINATE_NOTICE_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_TERMINATE_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_TERMINATE_REASON = 'AGT_DUES_TO_COMPANY';
    this.AGT_BLACK_LISTED_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_DUES_TO_COMPANY = 'AGT_DUES_TO_COMPANY';
    this.AGT_REJOINED_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_REMARKS = 'AGT_REMARKS';
    this.AGT_BUSINESS_TYPE = 1;
    this.AGT_LEVEL_CODE = 'AGT_LEVEL_CODE';
    this.AGT_LEADER_CODE = 'AGT_LEADER_CODE';
    this.AGT_STATUS = 1;
    this.AGT_TERMINATE_STATUS = 1;
    this.AGT_STOP_COMM_STATUS = 1;
    this.AGT_ISS_STATUS = 1;
    this.AGT_ISS_AMOUNT = 10000;
    this.AGT_ISS_GIVEN_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_ISS_CLOSE_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_RETAINER_STATUS = 1;
    this.AGT_RETAINER_AMOUNT = 10000;
    this.AGT_RETAINER_GIVEN_DATE = moment('10/10/2017').format('DD/MM/YYYY');
    this.AGT_RETAINER_CLOSE_DATE = moment('10/10/2017').format('DD/MM/YYYY');

    // alert('End');

  }

  DateTimeCheck() {

  }

  SearchRecord() {

    let objAgentSearch: IAgentSearch = {

      AGT_ID: this.AGT_SEARCH_ID,
      AGT_CODE: this.AGT_SEARCH_CODE,
      AGT_NAME: this.AGT_SEARCH_NAME,
      AGT_ADDRESS: this.AGT_SEARCH_ADDRESS,
      AGT_NIC_NO: this.AGT_SEARCH_NIC_NO,
      AGT_MOBILE: this.AGT_SEARCH_MOBILE

    }

    console.log(objAgentSearch);

    this.AgentService.GetAgentSearchDetails(objAgentSearch)
      .subscribe((data) => {

        this.AgentSearchList = data;

        console.log(this.AgentSearchList);

        console.log(JSON.stringify(data));

      },
      (err) => console.log(err));



    this.BankService.getBanks()
      .subscribe((data) => {

        this.bankList = data;

        console.log(JSON.stringify(data));
      },
      (err) => console.log(err));


  }



  setClickedRow = function (index, AGENT_ID) {
    console.log(AGENT_ID);

    this.AgentService.getAgentBySeqId(AGENT_ID)
      .subscribe((data) => {
        this.isLoading = false;

        let obj: IAgent = JSON.parse(data);

        this.AGT_SUB_CODE = obj.AGT_CODE;

        var moment = require('moment');

        this.AGT_ID = obj.AGT_ID,

          this.AGT_CODE = obj.AGT_CODE,

          this.AGT_TYPE_ID = obj.AGT_TYPE_ID,

          this.getAgentCodeByTypeID(obj.AGT_TYPE_ID);

        this.AGT_CODE_ID = obj.AGT_CODE_ID,

          this.AGT_MDRT_STATUS = obj.AGT_MDRT_STATUS,
          this.AGT_MDRT_YEAR = obj.AGT_MDRT_YEAR,
          this.AGT_SYSTEM_ID = obj.AGT_SYSTEM_ID,
          this.AGT_SUB_CODE = obj.AGT_SUB_CODE,
          this.AGT_LINE_OF_BUSINESS = obj.AGT_LINE_OF_BUSINESS,
          this.AGT_CHANNEL = obj.AGT_CHANNEL,
          this.AGT_LEVEL = obj.AGT_LEVEL,
          this.AGT_SUPER_CODE = obj.AGT_SUPER_CODE,
          this.AGT_TITLE = obj.AGT_TITLE,
          this.AGT_FIRST_NAME = obj.AGT_FIRST_NAME,
          this.AGT_LAST_NAME = obj.AGT_LAST_NAME,
          this.AGT_ADD1 = obj.AGT_ADD1,
          this.AGT_ADD2 = obj.AGT_ADD2,
          this.AGT_ADD3 = obj.AGT_ADD3,
          this.AGT_NIC_NO = obj.AGT_NIC_NO,
          this.AGT_DOB = moment(obj.AGT_DOB.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_MOBILE = obj.AGT_MOBILE,
          this.AGT_TEL_NO = obj.AGT_TEL_NO,
          this.AGT_FAX_NO = obj.AGT_FAX_NO,
          this.AGT_BRANCH_CODE = obj.AGT_BRANCH_CODE,
          this.AGT_BANK_ID = obj.AGT_BANK_ID,

          this.getBankBranch(obj.AGT_BANK_ID);

        this.AGT_BANK_BRANCH_ID = obj.AGT_BANK_BRANCH_ID,

          this.AGT_BANK_ACC_NO = obj.AGT_BANK_ACC_NO,
          this.AGT_ID_ISSUED = obj.AGT_ID_ISSUED,
          this.AGT_ID_ISSUED_DATE = moment(obj.AGT_ID_ISSUED_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_APPOINT_DATE = moment(obj.AGT_APPOINT_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_SLII_EXAM = obj.AGT_SLII_EXAM,
          this.AGT_SLII_EXAM_DATE = moment(obj.AGT_SLII_EXAM_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_AGMT_RECEIVED = obj.AGT_AGMT_RECEIVED,
          this.AGT_AGMT_DATE = moment(obj.AGT_AGMT_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_APP_RECEIVED = obj.AGT_APP_RECEIVED,
          this.AGT_APP_RECEIVED_DATE = moment(obj.AGT_APP_RECEIVED_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_TRNS_BRANCH_CODE = obj.AGT_TRNS_BRANCH_CODE,
          this.AGT_TRNS_BRANCH_DATE = moment(obj.AGT_APP_RECEIVED_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();//obj.,
        this.AGT_STOP_COMM_DATE = moment(obj.AGT_STOP_COMM_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_STOP_COMM_REASON = obj.AGT_STOP_COMM_REASON,
          this.AGT_RELEASE_COMM_DATE = moment(obj.AGT_TRNS_BRANCH_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_RELEASE_COMM_REASON = obj.AGT_RELEASE_COMM_REASON,
          this.AGT_CUSTOMER_COMPLAIN = obj.AGT_CUSTOMER_COMPLAIN,
          this.AGT_TERMINATE_NOTICE_DATE = moment(obj.AGT_TERMINATE_NOTICE_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_TERMINATE_DATE = moment(obj.AGT_TERMINATE_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_TERMINATE_REASON = obj.AGT_TERMINATE_REASON,
          this.AGT_BLACK_LISTED_DATE = moment(obj.AGT_BLACK_LISTED_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_DUES_TO_COMPANY = obj.AGT_DUES_TO_COMPANY,
          this.AGT_REJOINED_DATE = moment(obj.AGT_REJOINED_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_REMARKS = obj.AGT_REMARKS,
          this.AGT_BUSINESS_TYPE = obj.AGT_BUSINESS_TYPE,
          this.AGT_LEVEL_CODE = obj.AGT_LEVEL_CODE,
          this.AGT_LEADER_CODE = obj.AGT_LEADER_CODE,
          this.AGT_STATUS = obj.AGT_STATUS,
          this.AGT_TERMINATE_STATUS = obj.AGT_TERMINATE_STATUS,
          this.AGT_STOP_COMM_STATUS = obj.AGT_STOP_COMM_STATUS,
          this.AGT_ISS_STATUS = obj.AGT_ISS_STATUS,
          this.AGT_ISS_AMOUNT = obj.AGT_ISS_AMOUNT,
          this.AGT_ISS_GIVEN_DATE = moment(obj.AGT_ISS_GIVEN_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_ISS_CLOSE_DATE = moment(obj.AGT_ISS_CLOSE_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_RETAINER_STATUS = obj.AGT_RETAINER_STATUS,
          this.AGT_RETAINER_AMOUNT = obj.AGT_RETAINER_AMOUNT,
          this.AGT_RETAINER_GIVEN_DATE = moment(obj.AGT_RETAINER_GIVEN_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_RETAINER_CLOSE_DATE = moment(obj.AGT_RETAINER_CLOSE_DATE.toString().substr(0, 10), 'DD/MM/YYYY').toDate();
        this.AGT_LEADER_AGENT_CODE_V = obj.AGT_LEADER_AGENT_CODE_V,
          this.AGT_LEADER_LEADER_CODE_V = obj.AGT_LEADER_LEADER_CODE_V,
          this.AGT_LEADER_AGENT_CODE_H = obj.AGT_LEADER_AGENT_CODE_H,
          this.AGT_LEADER_LEADER_CODE_H = obj.AGT_LEADER_LEADER_CODE_H,


          console.log(obj);

      },
      (err) => {

        console.log(err);
        this.isLoading = false;

      });


    this.router.navigate(['/', 'mainDashboard']);


  }



}
