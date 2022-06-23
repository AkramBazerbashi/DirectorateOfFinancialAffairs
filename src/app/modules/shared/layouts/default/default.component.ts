import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../../components/sidebar/nav.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit ,AfterViewInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;
  sideBarOpen = true;
  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.sideBarOpen = true;

  }

  sideBarToggler($event:any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}

