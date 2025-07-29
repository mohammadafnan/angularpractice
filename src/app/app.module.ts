import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddcusinfoComponent } from './popup/addcusinfo/addcusinfo.component';
// import { MatDialogModule } from '@angular/material/dialog/typings/dialog-module';
// import { MatButtonModule } from '@angular/material/button/typings/button-module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { AddcusqualiComponent } from './popup/addcusquali/addcusquali.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProducttableComponent } from './pages/producttable/producttable.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddcusinfoComponent,
    AddcusqualiComponent,
    SidebarComponent,
    ProducttableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddcusinfoComponent, AddcusqualiComponent],

})
export class AppModule { }
