import { Routes } from '@angular/router';

import { AgentComponent } from './agent/agent.component';

import { BankComponent } from './bank/bank.component';

import { ImageUploadComponent } from './image-upload/image-upload.component';
// import { MainDashboardComponent } from './dashboards/main-dashboard/main-dashboard.component';

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
    }
    // },
    // {
    //     path: 'mainDashboard',
    //     component: MainDashboardComponent
    // }

];
