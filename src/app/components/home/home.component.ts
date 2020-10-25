import { Component, OnInit, Output, } from '@angular/core';
import { EventEmitter } from 'protractor';
import { routes } from 'src/app/consts/routes.enum';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private test: TestService) { }

  ngOnInit(): void {
  }



}
