import { AuthGuardServiceService } from './Global/auth-guard-service.service';
import { LoginComponent } from './SystemServices/components/user/login/login.component';
import { TBLShamelUserEditComponent } from './SystemServices/components/user/tblshamel-user-edit/tblshamel-user-edit.component';
import { TBLShamelUserListComponent } from './SystemServices/components/user/tblshamel-user-list/tblshamel-user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AuthGuardServiceService as AuthGuard
  } from './Global/auth-guard-service.service'
import { DefaultComponent } from './modules/shared/layouts/default/default.component';
import { EditEmployeeCardComponent } from './modules/employee/components/tblshamelemployee/edit-employee-card/edit-employee-card.component';
import { EmpShowDataComponent } from './modules/employee/components/tblshamelemployee/emp-show-data/emp-show-data.component';
import { NewEmployeeCardComponent } from './modules/employee/components/tblshamelemployee/new-employee-card/new-employee-card.component';
import { TblshamelsccourselistComponent } from './modules/employee/components/tblshamelsccourse/tblshamelsccourselist/tblshamelsccourselist.component';
import { TblshamelsccoursemodifyComponent } from './modules/employee/components/tblshamelsccourse/tblshamelsccoursemodify/tblshamelsccoursemodify.component';
import { TblshamelsceducationlistComponent } from './modules/employee/components/tblshamelsceducation/tblshamelsceducationlist/tblshamelsceducationlist.component';
import { TblshamelsceducationmodifyComponent } from './modules/employee/components/tblshamelsceducation/tblshamelsceducationmodify/tblshamelsceducationmodify.component';
import { TblshamelscjobstatelistComponent } from './modules/employee/components/tblshamelscjobstate/tblshamelscjobstatelist/tblshamelscjobstatelist.component';
import { TblshamelscjobstatemodifyComponent } from './modules/employee/components/tblshamelscjobstate/tblshamelscjobstatemodify/tblshamelscjobstatemodify.component';
import { EmployeeComponent } from './modules/employee/employee.component';
import { TBLShamelPrivilagesComponent } from './SystemServices/components/user/tblshamel-privilages/tblshamel-privilages.component';
import { EmployeesDepartmentComponent } from './componenets/employees-department/employees-department.component';
import { FinaceDepartmentComponent } from './componenets/finace-department/finace-department.component';


const routes: Routes = [
  
  {
    path: 'employees',
    component: EmployeesDepartmentComponent,
    loadChildren: ()=> import("./modules/employee/employee.module").then(m => m.EmployeeModule)
  },
  {
    path: 'finace',
    component: FinaceDepartmentComponent,
    loadChildren: ()=> import("./modules/finance/finance.module").then(m => m.FinanceModule)
  },

{   path: 'userlist',   component: TBLShamelUserListComponent,canActivate: [AuthGuard]},
{   path: 'Privilage',   component: TBLShamelPrivilagesComponent,canActivate: [AuthGuard]},
{   path: 'login',   component: LoginComponent},
{   path: 'default',   component: DefaultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
