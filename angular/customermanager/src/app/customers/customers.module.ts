import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListViewComponent } from './customerslistview.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CustomersComponent, CustomersListViewComponent
    ],
    exports: [
        CustomersListViewComponent
    ]
})
export class CustomersModule {}

