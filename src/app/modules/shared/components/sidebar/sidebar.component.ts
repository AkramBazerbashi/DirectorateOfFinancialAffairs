import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input} from '@angular/core';
import { NavItem } from './NavItem';
import {VERSION} from '@angular/material/core';
import { NavService } from './nav.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  
  version = VERSION;

  @Input() navItems: NavItem[] = [
    
   
  ];
  

  constructor() {
  }

  ngAfterViewInit() {
   
  }

  ngOnInit() {  
    console.log(this.navItems);
  }

}
