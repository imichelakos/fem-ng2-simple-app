import {Component, OnInit} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
