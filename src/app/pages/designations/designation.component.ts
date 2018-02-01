import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/models/user/user.model';
import { DesignationService } from '../../shared/services/designation/designation.service';
import { Idesignation } from '../../shared/models/designation.models';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})

export class DesignationComponent implements OnInit {

  User: IUser;

  ID: number = 0;
  CODE: string = '';
  DESCRIPTION: string = '';
  ACTIVE_STATUS: number = 0;
  CREATED_BY: string = '';

  DesignationList: Array<Idesignation> = [];
  isNEWDisabled: boolean = false;
  isEDITDisabled: boolean = false;
  isSAVEDisabled: boolean = false;
  isCANCELDisabled: boolean = false;

  constructor(private DesignationService: DesignationService) { }

  ngOnInit() {

    this.getDesignation();
    this.FormButtonStatusChange('LOAD');
    this.User = JSON.parse(localStorage.getItem('currentMRPUser'));

  }


  getDesignation() {
    this.DesignationService.getdesignations()
      .subscribe((data) => {

        this.DesignationList = data;
        console.log(JSON.stringify(data));
      },
      (err) => console.log(err));
  }

  CancelRecord() {
    this.FormButtonStatusChange('CANCEL');
  }

  NewRecord() {
    this.FormButtonStatusChange('NEW');
  }


  EditRecord() {
    this.FormButtonStatusChange('EDIT');
  }

  SaveRecord() {


    try {

      let obj: Idesignation = {
        Id: this.ID,
        Code: this.CODE,
        Description: this.DESCRIPTION,
        ActiveStatus: this.ACTIVE_STATUS,
        CreatedBy: this.User.UserName,
        CreatedDate: null,
        EffectiveEndDate: null

      }
      console.log(obj);

      this.DesignationService.saveDesignation(obj).subscribe((data: any) => {
        console.log(data);

        this.getDesignation();

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


  FormButtonStatusChange(Status) {
    if (Status == 'NEW') {
      this.isNEWDisabled = true;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = false;
      this.isCANCELDisabled = false;


      this.ID = 0;
      this.CODE = "";
      this.DESCRIPTION = "";
      this.ACTIVE_STATUS = 0;
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

      this.ID = 0;
      this.CODE = "";
      this.DESCRIPTION = "";
      this.ACTIVE_STATUS = 0;
    }
    if (Status == 'CANCEL') {
      this.isNEWDisabled = false;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = true;
      this.isCANCELDisabled = true;

      this.ID = 0;
      this.CODE = "";
      this.DESCRIPTION = "";
      this.ACTIVE_STATUS = 0;
    }
    if (Status == 'LOAD') {
      this.isNEWDisabled = false;
      this.isEDITDisabled = true;
      this.isSAVEDisabled = true;
      this.isCANCELDisabled = true;

      this.ID = 0;
      this.CODE = "";
      this.DESCRIPTION = "";
      this.ACTIVE_STATUS = 0;
    }
  }


  private setDesignationID = function (index, ID) {


    this.GetDesignationDetails(ID);

    this.FormButtonStatusChange('EDIT');

  }


  private GetDesignationDetails(ID) {

    this.DesignationService.getdesignation(ID)
      .subscribe((data) => {
        console.log(data);

        let objDesig: Idesignation = JSON.parse(JSON.stringify(data));

        this.ID = objDesig.Id;
        this.CODE = objDesig.Code;
        this.DESCRIPTION = objDesig.Description;
        this.ACTIVE_STATUS = objDesig.ActiveStatus;

      });

  }

}



