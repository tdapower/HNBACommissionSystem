

import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/models/user/user.model';
import { ProductService } from '../../shared/services/Product/product.service';
import { ProductcategoryService } from '../../shared/services/ProductCategory/productcategory.service';
import { Iproduct } from '../../shared/models/Product.models';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  User: IUser;
  
    ID: number = 0;
    CODE: string = '';
    DESCRIPTION: string = '';
    ACTIVE_STATUS: number = 0;
    PRODUCT_CAT_ID: number = 0;
    CREATED_BY: string = '';
  
    List: Array<Iproduct> = [];
    ProCatList: Array<Iproduct> = [];
    isNEWDisabled: boolean = false;
    isEDITDisabled: boolean = false;
    isSAVEDisabled: boolean = false;
    isCANCELDisabled: boolean = false;
  
    constructor(private ProductService: ProductService,private ProductcategoryService:ProductcategoryService) { }

  ngOnInit() {
    this.getProducts();
    this. getProductCategories();
    this.FormButtonStatusChange('LOAD');
    this.User = JSON.parse(localStorage.getItem('currentMRPUser'));
  }

  getProducts() {
    this.ProductService.getProducts()
      .subscribe((data) => {

        this.List = data;
        console.log(JSON.stringify(data));
      },
      (err) => console.log(err));
  }


  getProductCategories() {
    this.ProductcategoryService.getproductcategories()
      .subscribe((data) => {

        this.ProCatList = data;
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

      let obj: Iproduct = {
        Id: this.ID,
        Code: this.CODE,
        Description: this.DESCRIPTION,
        ActiveStatus: this.ACTIVE_STATUS,
        CategoryId: this.PRODUCT_CAT_ID,
        CreatedBy: this.User.UserName,
        CreatedDate: null,
        EffectiveEndDate: null

      }
      console.log(obj);

      this.ProductService.saveProduct(obj).subscribe((data: any) => {
        console.log(data);

        this.getProducts();

        if (data.toString().replace(/"/g, '') == "ERROR") {
          console.log("Error saving Designation");
        } else {
          console.log("Designation Successfully Saved.");
        }
      },
        (err) => {
          console.log(err);
          console.log("Error saving Designation");
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


  private setProductID = function (index, ID) {


    this.GetLevelDetails(ID);

    this.FormButtonStatusChange('EDIT');

  }


  private GetLevelDetails(ID) {

    this.ProductService.getProductsByID(ID)
      .subscribe((data) => {
        console.log(data);

        let obj: Iproduct = JSON.parse(JSON.stringify(data));

        this.ID = obj.Id;
        this.CODE = obj.Code;
        this.DESCRIPTION = obj.Description;
        this.ACTIVE_STATUS = obj.ActiveStatus;
        this.PRODUCT_CAT_ID = obj.CategoryId;

      });

  }

}
