import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCustomerComponent } from './components/manage-customer/manage-customer.component';
import { PosSaleComponent } from './components/pos-sale/pos-sale.component';
import { ManagePermissionComponent } from './components/manage-permission/manage-permission.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LoginComponent } from './components/login/login.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [  
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'managecustomer',
      component:ManageCustomerComponent
    },
    {
      path:'possale',
      component:PosSaleComponent
    },
    {
      path:'managepermission',
      component:ManagePermissionComponent
    },
    {
      path:'payments',
      component:PaymentsComponent
    },
    {
      path:'bar-chart',
      component:BarChartComponent
    },

    {
      path:'',
      redirectTo:'login',pathMatch:'full'
    }
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
