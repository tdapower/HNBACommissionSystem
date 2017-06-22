import { Routes } from '@angular/router';

import { AgentComponent } from './agent/agent.component';

import { BankComponent } from './bank/bank.component';
import { MainDashboardComponent } from './dashboards/main-dashboard/main-dashboard.component';

export const PAGE_ROUTES: Routes = [
    {
        path: 'agent',
        component: AgentComponent
    },
    {
        path: 'bank',
        component: BankComponent
    },
    {
        path: 'mainDashboard',
        component: MainDashboardComponent
    }
    


];
