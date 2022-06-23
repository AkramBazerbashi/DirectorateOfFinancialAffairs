import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/modules/shared/components/sidebar/nav.service';
import { NavItem } from 'src/app/modules/shared/components/sidebar/NavItem';

@Component({
  selector: 'app-employees-department',
  templateUrl: './employees-department.component.html',
  styleUrls: ['./employees-department.component.scss']
})
export class EmployeesDepartmentComponent implements OnInit ,AfterViewInit{
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
          route: 'manage/AddEmp',
          
        },
        {
          displayName: 'البيانات الشخصية',
          iconName: 'group',
          route: 'employee/1',
          
        }
        ,
        {
          displayName: 'المؤهل العلمي',
          iconName: 'group',
          route: 'employee/2',
          
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

