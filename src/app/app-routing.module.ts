import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/content/content.component';
import { NewcarsComponent } from 'src/app/newcars/newcars.component';
import { UsedcarsComponent } from 'src/app/usedcars/usedcars.component';
import { TestDriveRequestsComponent } from 'src/app/test-drive-requests/test-drive-requests.component';
import { AppointmentsComponent } from 'src/app/appointments/appointments.component';
import { ServiceHistoryComponent } from 'src/app/service-history/service-history.component';
import { RaRequestsComponent } from 'src/app/ra-requests/ra-requests.component';
import { MangeNewsComponent } from 'src/app/mange-news/mange-news.component';
import { ManageEventsComponent } from 'src/app/manage-events/manage-events.component';
import { ManageOffersComponent } from 'src/app/manage-offers/manage-offers.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { ManageUsersComponent } from 'src/app/manage-users/manage-users.component';
import { ManageSettingsComponent } from 'src/app/manage-settings/manage-settings.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ManageBranchsComponent } from 'src/app/manage-branchs/manage-branchs.component';
import { NewCarsConfigComponent } from 'src/app/new-cars-config/new-cars-config.component';
import { UsedCarsConfigComponent } from 'src/app/used-cars-config/used-cars-config.component';
import { ServicesConfigComponent } from 'src/app/services-config/services-config.component';
import { ServiceAdvisorConfigComponent } from 'src/app/service-advisor-config/service-advisor-config.component';
import { CalenderComponent } from 'src/app/calender/calender.component';
import { TdmodelConfigComponent } from 'src/app/tdmodel-config/tdmodel-config.component';
import { ManageRolesComponent } from 'src/app/manage-roles/manage-roles.component';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'config/AddPage', component: AddPageComponent },
  { path: 'config/AddUser', component: AddUserComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newcars', component: NewcarsComponent },
  { path: 'usedcars', component: UsedcarsComponent },

  { path: 'tdrequests', component: TestDriveRequestsComponent },


  { path: 'appointments', component: AppointmentsComponent },
  { path: 'servicehistory', component: ServiceHistoryComponent },



  { path: 'rarequests', component: RaRequestsComponent },


  { path: 'news', component: MangeNewsComponent },
  { path: 'events', component: ManageEventsComponent },
  { path: 'offers', component: ManageOffersComponent },


  { path: 'messages', component: MessagesComponent },
  { path: 'notifications', component: NotificationsComponent },



  { path: 'customers', component: CustomersComponent },




  { path: 'manage/branchs', component: ManageBranchsComponent },
  { path: 'config/newcars', component: NewCarsConfigComponent },
  { path: 'config/usedcars', component: UsedCarsConfigComponent },
  { path: 'config/services', component: ServicesConfigComponent },
  { path: 'config/serviceadvisor', component: ServiceAdvisorConfigComponent },
  { path: 'config/calender', component: CalenderComponent },
  { path: 'config/tdmodels', component: TdmodelConfigComponent },
  { path: 'manage/roles', component: ManageRolesComponent },
  { path: 'manage/users', component: ManageUsersComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
