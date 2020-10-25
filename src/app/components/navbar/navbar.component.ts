import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts/routes.enum';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routes: typeof routes = routes
  XsDevice = false;
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter
  constructor(private test: TestService) { }

  ngOnInit(): void {
  }
  toggleSide() {
    this.toggleSideNav.emit("open Nav")
  }


}
