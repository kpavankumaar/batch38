import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent, CustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
