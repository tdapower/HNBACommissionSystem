import { Routes } from '@angular/router';

import { AgentComponent } from './agent/agent.component';

import { BankComponent } from './bank/bank.component';

import { DesignationComponent } from './designations/designation.component';

import { ChangereasonComponent } from './changereason/changereason.component';

import { LevelComponent } from './level/level.component';

import { ImageUploadComponent } from './image-upload/image-upload.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard/main-dashboard.component';

import { SummeryComponent } from './summery/summery.component';

import { ProductsComponent } from './products/products.component';

import { ProductCategoryComponent } from './productcategory/productcategory.component';

export const PAGE_ROUTES: Routes = [
    {
        path: '',
        component: AgentComponent
    },
    {
        path: 'agent',
        component: AgentComponent
    },
    {
        path: 'bank',
        component: BankComponent
    },
    {
        path: 'imageUpload',
        component: ImageUploadComponent

    },
    {
        path: 'mainDashboard',
        component: MainDashboardComponent
    },
    {
        path: 'designation',
        component: DesignationComponent
    },
    {
        path: 'changereason',
        component: ChangereasonComponent
    },
    {
        path: 'level',
        component: LevelComponent
    },
    {
        path: 'summery',
        component: SummeryComponent
    },
    {
        path: 'product',
        component: ProductsComponent
    },
    {
        path: 'productcategory',
        component: ProductCategoryComponent
    }

];
