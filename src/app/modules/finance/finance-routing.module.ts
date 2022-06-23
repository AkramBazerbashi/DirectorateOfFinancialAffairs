import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerComponent } from './broker/broker.component';
import { TBLShamelOvertimeEmployeeListComponent } from './broker/components/tblShamelOvertimeEmployee/tblshamel-overtime-employee-list/tblshamel-overtime-employee-list.component';
import { TblShamelOvertimeShatebListComponent } from './broker/components/tblShamelOvertimeShateb/tbl-shamel-overtime-shateb-list/tbl-shamel-overtime-shateb-list.component';
import { FinaceComponent } from './finace.component';

const routes: Routes = [
  { path: '', component: FinaceComponent},
  { path: 'finace', component: FinaceComponent},
  { path: 'broker', component: BrokerComponent,
         children: 
         [    
           { path: 'newcard', component: TBLShamelOvertimeEmployeeListComponent },              
         ]
  },
     
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
