import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'toastr-ng2';

import { NgUploaderModule } from 'ngx-uploader';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from "ng2-modal";

import { routes } from './app.router';
import { AgentService } from './shared/services/Agent/Agent.service';
import { AgentCodeService } from './shared/services/AgentCode/AgentCode.service';
import { AgentTypeService } from './shared/services/AgentType/AgentType.service';
import { BankService } from './shared/services/bank/bank.service';
import { BankBranchService } from './shared/services/bankBranch/bankBranch.service';
import { BranchService } from './shared/services/branch/branch.service';
import { LevelService } from './shared/services/Level/level.service';
import { UploadDocTypeService } from './shared/services/UploadDocType/upload-doc-type.service';
import { UploadDocService } from './shared/services/UploadDoc/upload-doc.service';
import { LanguageService } from './shared/services/Language/language.service';
import { DesignationService } from './shared/services/designation/designation.service';
import { ChangereasonService } from './shared/services/ChangeReason/changereason.service';
import { AgentHistoryService } from './shared/services/AgentHistory/agent-history.service';
import { LeaderCodeSearchService } from './shared/services/LeaderCodeSearch/leader-code-search.service';
import { AgentAttachedService } from './shared/services/AgentAttached/agent-attached.service';
import { ProductcategoryService } from './shared/services/ProductCategory/productcategory.service';
import { ProductService } from './shared/services/Product/product.service';
import { PropertyService } from './shared/services/Property/property.service';
import { CommissionRateChartService } from './shared/services/Commission-rate-chart/commission-rate-chart.service';
import { CommissionORDRateChartService } from './shared/services/CommissionORD-rate-chart/commission-ord-rate-chart.service';
import { PIDSearchService } from './shared/services/PIDSearch/pidsearch.service';
import { PIDDetailsService } from './shared/services/PIDDetails/piddetails.service';
import { RefundService } from './shared/services/Refund/refund.service';




import { AgentComponent } from './pages/agent/agent.component';
import { BankComponent } from './pages/bank/bank.component';

import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { LayoutComponent } from './layout/layout/layout.component';

import { AuthenticationService } from './shared/services/user/authentication.service';
import { AuthGuard } from '../app/authGuard';
import { SpinnerLargeComponent } from './layout/spinner-large/spinner-large.component';
import { SpinnerTopComponent } from './layout/spinner-top/spinner-top.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard/main-dashboard.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ImageUploadComponent } from './pages/image-upload/image-upload.component';
import { DesignationComponent } from './pages/designations/designation.component';
import { ChangereasonComponent } from './pages/changereason/changereason.component';
import { LevelComponent } from './pages/level/level.component';
import { SummeryComponent } from './pages/summery/summery.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCategoryComponent } from './pages/productcategory/productcategory.component';
import { CommissionRateChartComponent } from './pages/commission-rate-chart/commission-rate-chart.component';
import { OverridingRateChartComponent } from './pages/overriding-rate-chart/overriding-rate-chart.component';
import { ReturnRefundCancellationComponent } from './pages/return-refund-cancellation/return-refund-cancellation.component';
import { ReturnRefundCancellationConfirmComponent } from './pages/return-refund-cancellation-confirm/return-refund-cancellation-confirm.component';
import { ManualUploadsComponent } from './pages/manual-uploads/manual-uploads.component';
import { ManualUploadsReceiptsComponent } from './pages/manual-uploads-receipts/manual-uploads-receipts.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgentComponent,
    BankComponent,
    UserLoginComponent,
    LayoutComponent,
    SpinnerLargeComponent,
    SpinnerTopComponent,
    MainDashboardComponent,
    ImageUploadComponent,
    DesignationComponent,
    ChangereasonComponent,
    LevelComponent,
    SummeryComponent,
    ProductsComponent,
    ProductCategoryComponent,
    CommissionRateChartComponent,
    OverridingRateChartComponent,
    ReturnRefundCancellationComponent,
    ReturnRefundCancellationConfirmComponent,
    ManualUploadsComponent,
    ManualUploadsReceiptsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NKDatetimeModule,
    Ng2PaginationModule,
    ModalModule,
    MomentModule,
    ToastrModule.forRoot(),
    NgUploaderModule,
    Angular2FontawesomeModule 
    
  ],
  providers: [
    AgentService,
    AuthenticationService,
    AuthGuard,
    AgentCodeService,
    AgentTypeService,
    BankService,
    BankBranchService,
    BranchService,
    LevelService,
    UploadDocTypeService,
    MainDashboardComponent,
    UploadDocService,
    LanguageService,
    DesignationService,
    AgentHistoryService,
    LeaderCodeSearchService,
    AgentAttachedService,
    ChangereasonService,
    ProductcategoryService,
    ProductService,
    PropertyService,
    CommissionRateChartService,
    CommissionORDRateChartService,
    PIDSearchService,
    PIDDetailsService,
    RefundService
    ],


  bootstrap: [AppComponent]
})
export class AppModule { }
