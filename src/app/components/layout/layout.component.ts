import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  mode = "over";
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSide(e) {
    this.opened = !this.opened;
    console.log(e);
  }

}
