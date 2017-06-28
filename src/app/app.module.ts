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
// import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard/main-dashboard.component';

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
    ImageUploadComponent
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
    MainDashboardComponent
    ],



  bootstrap: [AppComponent]
})
export class AppModule { }
