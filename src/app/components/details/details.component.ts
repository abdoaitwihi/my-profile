import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/consts/routes.enum';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  key: any;
  private item: any;
  itemNumber: number;
  myItem = '';
  routes: typeof routes = routes
  constructor(
    private route: ActivatedRoute,
    private test: TestService
  ) { }


  ngOnInit(): void {
    this.item = this.route.params.subscribe(params => {
      this.key = +params['id'];
      this.itemNumber = +params['id'];
      this.getItem(this.key)
    })
  }
  getItem(key) {
    this.myItem = this.test.getItem(key)
  }
  ngOnDestroy() {
    this.item.unsubscribe();
  }

}
