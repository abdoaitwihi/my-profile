import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts/routes.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: typeof routes = routes;
  @Output() toggleSideNavSideBar: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNav() {
    this.toggleSideNavSideBar.emit("toggle nav");
  }

}
