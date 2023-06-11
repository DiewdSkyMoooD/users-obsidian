import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerHttpPetitionInterceptor } from './interceptors/spinner-http-petition.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TableUsersComponent,
    NavbarComponent,
    InfoUserComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerHttpPetitionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
