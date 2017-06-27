import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankService } from '../../shared/services/bank/bank.service';
import { IBank } from '../../shared/models/Bank.models';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  Id: number = 0;
  Code: string = '';
  Description: string = '';

  bankList: Array<Object> = [];
  constructor(private BankService: BankService) { }

  ngOnInit() {
    this.getBanks();
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

      let obj: IBank = {
        Id: this.Id,
        Code: this.Code,
        Description: this.Description
      }



      this.BankService.saveBank(obj).subscribe((data: any) => {
        console.log(data);

        this.getBanks();

        if (data.toString().replace(/"/g, '') == "ERROR") {
          console.log("Error saving quotation");
        } else {
          console.log("Quotation Successfully Saved.");
        }
      },
        (err) => {
          console.log(err);
          console.log("Error saving quotation");
        },
        () => console.log('done'));

    } catch (error) {

    }


  }

}




