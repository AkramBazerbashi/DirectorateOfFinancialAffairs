import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../shared/components/sidebar/nav.service';
import { NavItem } from '../shared/components/sidebar/NavItem';

@Component({
  selector: 'app-finace',
  templateUrl: './finace.component.html',
  styleUrls: ['./finace.component.scss']
})
export class FinaceComponent implements OnInit ,AfterViewInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;

  @Input() navItems: NavItem[] = [
    {
      displayName: 'الشؤون المالية',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'شطب الوكلاء',
          iconName: 'group',
          route: 'finace/broker',
          
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

