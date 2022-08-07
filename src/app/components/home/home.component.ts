import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getDevelopPhaseProgressValue,
  getInstallProgressValue,
  TestState,
} from 'src/app/ngrx';
import {
  installTestTechnique,
  developPhase,
  miseEnZero,
} from 'src/app/ngrx/actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  installTestTechnique$?: Observable<any>;
  developPhase$?: Observable<any>;

  firstName: string = 'Hafsi';
  lastName: string = 'Salim';
  date: any = new Date();
  constructor(private state: Store<TestState>, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.installTestTechnique$ = this.state.select(getInstallProgressValue);
    this.developPhase$ = this.state.select(getDevelopPhaseProgressValue);
    this.date = this.datePipe.transform(this.date, 'dd-MM-yyy');
  }
  installTest() {
    this.state.dispatch(installTestTechnique({ value: 5 }));
  }
  develop() {
    this.state.dispatch(developPhase({ value: 10 }));
  }
  miseZero() {
    this.state.dispatch(miseEnZero());
  }
}
