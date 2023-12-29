import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProcessListComponent } from './pages/process-list/process-list.component';
import { ProcessDetailComponent } from './pages/process-detail/process-detail.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ReportComponent } from './pages/report/report.component';
import { HelpComponent } from './pages/help/help.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProcessAssignComponent } from './components/process-assign/process-assign.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentDownloadComponent } from './components/document-download/document-download.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { SupportComponent } from './components/support/support.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProcessListComponent,
    ProcessDetailComponent,
    UserManagementComponent,
    ReportComponent,
    HelpComponent,
    UserProfileComponent,
    NotFoundComponent,
    ErrorComponent,
    LogoutComponent,
    ProcessAssignComponent,
    AnalysisComponent,
    DocumentUploadComponent,
    DocumentDownloadComponent,
    SearchComponent,
    FilterComponent,
    SupportComponent,
    NotificationSettingsComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
