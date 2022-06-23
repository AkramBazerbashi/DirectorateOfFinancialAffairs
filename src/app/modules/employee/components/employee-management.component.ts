import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { NavService } from '../../shared/components/sidebar/nav.service';
import { TBLShamelEmployee } from '../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../shared/services/employees_department/employee-service.service';
import { IGlobalEmployeeList } from '../../shared/services/employees_department/IGlobalEmployeeList';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee/deleteemployee.component';
import { EmployeechangeidComponent } from './employeechangeid/employeechangeid/employeechangeid.component';
import { EmpShowDataComponent } from './tblshamelemployee/emp-show-data/emp-show-data.component';
import { TblshamelincmarsoomlistComponent } from './tblshamelincmarsoom/tblshamelincmarsoomlist/tblshamelincmarsoomlist.component';
import { TblshamelscbonuslistComponent } from './tblshamelscbonus/tblshamelscbonuslist/tblshamelscbonuslist.component';
import { TblshamelsccourselistComponent } from './tblshamelsccourse/tblshamelsccourselist/tblshamelsccourselist.component';
import { TblshamelsceducationlistComponent } from './tblshamelsceducation/tblshamelsceducationlist/tblshamelsceducationlist.component';
import { TblshamelscfreeholidaylistComponent } from './tblshamelscfreeholiday/tblshamelscfreeholidaylist/tblshamelscfreeholidaylist.component';
import { TblshamelscjobstatelistComponent } from './tblshamelscjobstate/tblshamelscjobstatelist/tblshamelscjobstatelist.component';
import { TblshamelscpunishmentlistComponent } from './tblshamelscpunishment/tblshamelscpunishmentlist/tblshamelscpunishmentlist.component';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit , OnDestroy ,OnChanges,AfterViewInit
{
  public SelectedEmp :  BehaviorSubject<TBLShamelEmployee> = new BehaviorSubject(new TBLShamelEmployee());

  @ViewChild(TblshamelsceducationlistComponent, { static: false }) childEmployeeData: EmpShowDataComponent;
  @ViewChild(TblshamelsceducationlistComponent, { static: false }) childSCEducation: TblshamelsceducationlistComponent;
  @ViewChild(TblshamelscjobstatelistComponent, { static: false }) childSCJobState: TblshamelsceducationlistComponent;
  @ViewChild(TblshamelsccourselistComponent, { static: false }) childSCCourse: TblshamelsceducationlistComponent;
  @ViewChild(TblshamelscfreeholidaylistComponent, { static: false }) childSCFreeHoliday: TblshamelscfreeholidaylistComponent;
  @ViewChild(TblshamelscbonuslistComponent, { static: false }) childSCBonus: TblshamelscbonuslistComponent;
  @ViewChild(TblshamelscpunishmentlistComponent, { static: false }) childSCPunishment: TblshamelscpunishmentlistComponent;
  @ViewChild(TblshamelincmarsoomlistComponent, { static: false }) childSCIncmarsoom: TblshamelincmarsoomlistComponent;
  @ViewChild(TblshamelincmarsoomlistComponent, { static: false }) childDeleteemployee: DeleteemployeeComponent;
  @ViewChild(TblshamelincmarsoomlistComponent, { static: false }) childChangeid: EmployeechangeidComponent;
  
  

  

  
  

  currentChildComponent:BehaviorSubject<string> = new BehaviorSubject('');
  Window:String ='';
  
  constructor(public activatedRoute: ActivatedRoute,
  
    private fb: FormBuilder,
    public restApi:EmployeeServiceService,public GlobalEmployeeList : IGlobalEmployeeList  ) 
    {
     
      this.currentChildComponent.subscribe(
        data=>
        {this.Window =data;}
      )


      try{
        this.activatedRoute.params.subscribe(params => {
         this.currentChildComponent.next(params['id']);
        console.log(params['id']);
        console.log('route');

         });
       
  
     }catch(Exception :any)
     {}    
   }


  ngAfterViewInit(): void {

  

  }


  FindEmployeeFromBar (employee:TBLShamelEmployee)
  {
      this.SelectedEmp.next(employee);
  }

  ngAfterContentInit(){
   

  

    this.currentChildComponent.subscribe(res=>

      {

        if (this.Window =='Add'  )
        {          
          
        }
        


        if (this.Window =='2' &&  this.childSCEducation )
        {          
          this.childSCEducation.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCEducation.FillTable();  
        }else if (this.Window=='4' && this.childSCCourse)
        {
          this.childSCCourse.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCCourse.FillTable();  
        }
        else if (this.Window=='10' && this.childChangeid)
        {
          
          
        }
        else if (this.Window=='9' && this.childDeleteemployee)
        {
          
        }
        else if (this.Window=='8' && this.childSCIncmarsoom)
        {
          this.childSCIncmarsoom.FillTable();  
        }
        else if (this.Window=='7' && this.childSCPunishment)
        {
          this.childSCPunishment.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCPunishment.FillTable();  
        }
        else if (this.Window=='5' && this.childSCBonus)
        {
          this.childSCBonus.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCBonus.FillTable();  
        }
        else if (this.Window=='6' && this.childSCFreeHoliday)
        {
          this.childSCFreeHoliday.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCFreeHoliday.FillTable();  
        }
        else if (this.Window=='1' && this.childEmployeeData)
        {
          this.childEmployeeData.SelectedEmp = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue():new TBLShamelEmployee());
          
        }

      });

    


    this.SelectedEmp.subscribe(res=>
      {

        if (this.Window =='2' &&  this.childSCEducation )
        {          
          this.childSCEducation.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCEducation.FillTable();  
        }else if (this.Window=='4' && this.childSCCourse)
        {
          this.childSCCourse.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCCourse.FillTable();  
        }
        else if (this.Window=='10' && this.childChangeid)
        {
          
          
        }
        else if (this.Window=='9' && this.childDeleteemployee)
        {
          
        }
        else if (this.Window=='8' && this.childSCIncmarsoom)
        {
          this.childSCIncmarsoom.FillTable();  
        }
        else if (this.Window=='7' && this.childSCPunishment)
        {
          this.childSCPunishment.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCPunishment.FillTable();  
        }
        else if (this.Window=='5' && this.childSCBonus)
        {
          this.childSCBonus.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCBonus.FillTable();  
        }
        else if (this.Window=='6' && this.childSCFreeHoliday)
        {
          this.childSCFreeHoliday.id = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue().id:-1);
          this.childSCFreeHoliday.FillTable();  
        }
        else if (this.Window=='1' && this.childEmployeeData)
        {
          this.childEmployeeData.SelectedEmp = (this.SelectedEmp && this.SelectedEmp.getValue().id>0? this.SelectedEmp.getValue():new TBLShamelEmployee());
          
        }

      });

     
   }



  
  
  
     ngOnInit() {

    

     this.ngAfterContentInit();
     
     }

   
  
   
 

  ngOnDestroy() {
  
  }

  


  public RefreshFrame()
  {
try{
  switch(this.Window)
    {
      case "2":
       this.childSCEducation.FillTable();
        break;      
      case "3":
        this.childSCJobState.FillTable();
            break;
      case "4":
          this.childSCCourse.FillTable(); 
          break;    
      case "8":
            this.childSCIncmarsoom.FillTable(); 
            break;
      case "7":
              this.childSCPunishment.FillTable(); 
              break;
      case "6":
            this.childSCFreeHoliday.FillTable(); 
            break;

      case "5":
              this.childSCBonus.FillTable(); 
              break;
    }

}catch(ex:any)
{}
    
    

  
  


  }

  


  ngOnChanges(changes: SimpleChanges) {
   
}

}



    


    
  


