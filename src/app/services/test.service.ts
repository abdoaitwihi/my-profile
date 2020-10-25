import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4"
  ]
  observerString = new BehaviorSubject<string>("first value");
  constructor() { }
  getObserverString() {
    return this.observerString.asObservable();
  }
  changeObserver(data) {
    this.observerString.next(data)
  }
  getItem(key) {
    return this.items[key]
  }
  getItems() {
    return this.items;
  }
}
