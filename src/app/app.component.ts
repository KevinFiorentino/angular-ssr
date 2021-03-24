import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/redux/config-store-state.model';
import { changeDarkModeAction } from 'src/app/shared/redux/actions/action-dark-mode.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public darkMode$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
/*  this.store.select(state => state.storeDarkMode.active)
      .subscribe(data => {
        this.darkMode = data;
      }); */
    this.darkMode$ = this.store.select(state => state.storeDarkMode.active);
  }

  toggleDarkMode(): void {
    this.store.dispatch(changeDarkModeAction());
  }

}
