import { TblshamelincmarsoomlistComponent } from './components/tblshamelincmarsoom/tblshamelincmarsoomlist/tblshamelincmarsoomlist.component'; 
import { TblshamelscpunishmentlistComponent } from './components/tblshamelscpunishment/tblshamelscpunishmentlist/tblshamelscpunishmentlist.component';
import { TblshamelscjobstatelistComponent } from './components/tblshamelscjobstate/tblshamelscjobstatelist/tblshamelscjobstatelist.component';
import { TblshamelsccourselistComponent } from './components/tblshamelsccourse/tblshamelsccourselist/tblshamelsccourselist.component';

import { Component, OnInit, ViewChild, NgModule, OnDestroy, OnChanges, SimpleChanges, AfterViewInit, ElementRef, Input } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';


import { ViewChildren, QueryList } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';




import { EmployeeSeachDialogComponent } from './components/tblshamelemployee/employee-seach-dialog/employee-seach-dialog.component'; 
import { TblshamelsceducationlistComponent } from './components/tblshamelsceducation/tblshamelsceducationlist/tblshamelsceducationlist.component';

import { TblshamelscfreeholidaylistComponent } from './components/tblshamelscfreeholiday/tblshamelscfreeholidaylist/tblshamelscfreeholidaylist.component';
import { TblshamelscbonuslistComponent } from './components/tblshamelscbonus/tblshamelscbonuslist/tblshamelscbonuslist.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeechangeidComponent } from './components/employeechangeid/employeechangeid/employeechangeid.component';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee/deleteemployee.component';
import { EmpShowDataComponent } from './components/tblshamelemployee/emp-show-data/emp-show-data.component'; 
import { TBLShamelEmployee } from '../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../shared/services/employees_department/employee-service.service';
import { IGlobalEmployeeList } from '../shared/services/employees_department/IGlobalEmployeeList';
import { NavService } from '../shared/components/sidebar/nav.service';
import { NavItem } from '../shared/components/sidebar/NavItem';





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit ,AfterViewInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;

  @Input() navItems: NavItem[] = [
    {
      displayName: 'البطاقة الذاتية',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'ادخال بطاقة شخصية',
          iconName: 'group',
          route: 'employees/manage/AddEmp',
          
        },
        {
          displayName: 'البيانات الشخصية',
          iconName: 'group',
          route: 'employees/manage/edu',
          
        }
        ,
        {
          displayName: 'المؤهل العلمي',
          iconName: 'group',
          route: '/manage/AddEmp',
          
        },
        {
          displayName: 'الدراسات والدورات',
          iconName: 'group',
          route: 'employee/4',
          
        },
        {
          displayName: 'البيانات الشخصية',
          iconName: 'group',
          route: 'devfestfl/speakers',
          
        },{
          displayName: 'الوضع الوظيفي',
          iconName: 'group',
          route: 'employee/3',
          
        },
        {
          displayName: 'الإجازات الخاصة',
          iconName: 'group',
          route: 'employee/6',
          
        },
        {
          displayName: 'المكافآت',
          iconName: 'group',
          route: 'employee/5',
          
        },
        {
          displayName: 'العقوبات',
          iconName: 'group',
          route: 'employee/7',
          
        }, 
        {
          displayName: 'مراسيم الزيادة',
          iconName: 'group',
          route: 'employee/8',
          
        },
        {
          displayName: 'حذف بطاقة',
          iconName: 'group',
          route: 'employee/9',
          
        },
        {
          displayName: 'تغيير رقم البطاقة',
          iconName: 'group',
          route: 'employee/10',          
        },


        
          ]
      
    }

   
  ];
  



  sideBarOpen = true;
  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.sideBarOpen = true;

  }

  sideBarToggler($event:any) {
    this.sideBarOpen = !this.sideBarOpen;
    console.log(this.sideBarOpen);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}

