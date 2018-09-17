import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersModule } from '../customers/customers.module';
import { CustomerComponent } from './customer.component';

@NgModule({
    imports: [
        CommonModule, CustomersModule
    ],
    declarations: [ CustomerComponent]
})
class CustomerModule {}
