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

import { CommissionRateChartComponent } from './commission-rate-chart/commission-rate-chart.component';

import { OverridingRateChartComponent } from './overriding-rate-chart/overriding-rate-chart.component';

import { ReturnRefundCancellationComponent } from './return-refund-cancellation/return-refund-cancellation.component';

import { ReturnRefundCancellationConfirmComponent } from './return-refund-cancellation-confirm/return-refund-cancellation-confirm.component';

import { ManualUploadsComponent } from './manual-uploads/manual-uploads.component';

import { ManualUploadsReceiptsComponent } from './manual-uploads-receipts/manual-uploads-receipts.component';



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
    },
    {
        path: 'commissionratechart',
        component: CommissionRateChartComponent
    },
    {
        path: 'overrridingratechart',
        component: OverridingRateChartComponent
    },
    {
        path: 'ReturnRefundCancellation',
        component: ReturnRefundCancellationComponent
    },
    {
        path: 'ReturnRefundCancellationConfirm',
        component: ReturnRefundCancellationConfirmComponent
    },
    {
        path:'ManualUploadsComponent',
        component: ManualUploadsComponent
    },
    {
        path:'ManualUploadsReceiptsComponent',
        component: ManualUploadsReceiptsComponent
    }
    

];
