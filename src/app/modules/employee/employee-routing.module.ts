import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/SystemServices/components/user/login/login.component";
import { TBLShamelPrivilagesComponent } from "src/app/SystemServices/components/user/tblshamel-privilages/tblshamel-privilages.component";
import { TBLShamelUserListComponent } from "src/app/SystemServices/components/user/tblshamel-user-list/tblshamel-user-list.component";
import { DefaultComponent } from "../shared/layouts/default/default.component";
import { EmployeeManagementComponent } from "./components/employee-management.component";
import { EditEmployeeCardComponent } from "./components/tblshamelemployee/edit-employee-card/edit-employee-card.component";
import { EmpShowDataComponent } from "./components/tblshamelemployee/emp-show-data/emp-show-data.component";
import { NewEmployeeCardComponent } from "./components/tblshamelemployee/new-employee-card/new-employee-card.component";
import { TblshamelsccourselistComponent } from "./components/tblshamelsccourse/tblshamelsccourselist/tblshamelsccourselist.component";
import { TblshamelsccoursemodifyComponent } from "./components/tblshamelsccourse/tblshamelsccoursemodify/tblshamelsccoursemodify.component";
import { TblshamelsceducationlistComponent } from "./components/tblshamelsceducation/tblshamelsceducationlist/tblshamelsceducationlist.component";
import { TblshamelsceducationmodifyComponent } from "./components/tblshamelsceducation/tblshamelsceducationmodify/tblshamelsceducationmodify.component";
import { TblshamelscjobstatelistComponent } from "./components/tblshamelscjobstate/tblshamelscjobstatelist/tblshamelscjobstatelist.component";
import { TblshamelscjobstatemodifyComponent } from "./components/tblshamelscjobstate/tblshamelscjobstatemodify/tblshamelscjobstatemodify.component";
import { EmployeeComponent } from "./employee.component";


const routes: Routes = [
 { path: '', component: EmployeeComponent,

   children:
    [   
      { path: 'manage', component: EmployeeManagementComponent,
        children: 
        [    
          { path: 'AddEmp', component: NewEmployeeCardComponent },              
          { path: 'edu', component: TblshamelsceducationlistComponent },    
        ]
      },
    ]
 },
 
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }


