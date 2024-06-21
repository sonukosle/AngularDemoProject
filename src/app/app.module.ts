import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ManageCustomerComponent } from './components/manage-customer/manage-customer.component';
import { PosSaleComponent } from './components/pos-sale/pos-sale.component';
import { ManagePermissionComponent } from './components/manage-permission/manage-permission.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ManageCustomerComponent,
    PosSaleComponent,
    ManagePermissionComponent,
    PaymentsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
