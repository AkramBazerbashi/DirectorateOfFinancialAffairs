import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../../shared/components/sidebar/nav.service';
import { NavItem } from '../../shared/components/sidebar/NavItem';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit ,AfterViewInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;

  @Input() navItems: NavItem[] = [
    {
      displayName: 'شطب الوكلاء',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'ادخال ذاتية الوكلاء',
          iconName: 'group',
          route: 'finace/broker/newcard',          
        },
        {
          displayName: 'ادخال ذاتية الوكلاء',
          iconName: 'group',
          route: '/broker/newcard',          
        },
        {
          displayName: 'ادخال ذاتية الوكلاء',
          iconName: 'group',
          route: 'newcard',          
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

