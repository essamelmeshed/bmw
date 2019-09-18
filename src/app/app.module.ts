import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddnewcarComponent } from './addnewcar/addnewcar.component';
import { ListcarsComponent } from './listcars/listcars.component';
import { NewcarsComponent } from './newcars/newcars.component';
import { UsedcarsComponent } from './usedcars/usedcars.component';
import { AddusedcarComponent } from './addusedcar/addusedcar.component';
import { ListusedcarsComponent } from './listusedcars/listusedcars.component';
import { TestDriveRequestsComponent } from './test-drive-requests/test-drive-requests.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ServiceHistoryComponent } from './service-history/service-history.component';
import { RaRequestsComponent } from './ra-requests/ra-requests.component';
import { MangeNewsComponent } from './mange-news/mange-news.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';
import { ManageBranchsComponent } from './manage-branchs/manage-branchs.component';
import { NewCarsConfigComponent } from './new-cars-config/new-cars-config.component';
import { UsedCarsConfigComponent } from './used-cars-config/used-cars-config.component';
import { ServicesConfigComponent } from './services-config/services-config.component';
import { ServiceAdvisorConfigComponent } from './service-advisor-config/service-advisor-config.component';
import { CalenderComponent } from './calender/calender.component';
import { TdmodelConfigComponent } from './tdmodel-config/tdmodel-config.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
//services
import { adminService } from './shared/admin-service';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AddBranchComponent } from './add-branch/add-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DashboardComponent,
    AddnewcarComponent,
    ListcarsComponent,
    NewcarsComponent,
    UsedcarsComponent,
    AddusedcarComponent,
    ListusedcarsComponent,
    TestDriveRequestsComponent,
    AppointmentsComponent,
    ServiceHistoryComponent,
    RaRequestsComponent,
    MangeNewsComponent,
    ManageEventsComponent,
    ManageOffersComponent,
    MessagesComponent,
    NotificationsComponent,
    ManageUsersComponent,
    ManageSettingsComponent,
    ManageBranchsComponent,
    NewCarsConfigComponent,
    UsedCarsConfigComponent,
    ServicesConfigComponent,
    ServiceAdvisorConfigComponent,
    CalenderComponent,
    TdmodelConfigComponent,
    ManageRolesComponent,
    CustomersComponent,
    LoginComponent,
    AddUserComponent,
    AddPageComponent,
    AddBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [adminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
