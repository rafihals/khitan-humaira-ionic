import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor () {
  }

  ngOnInit() {
    // if (localStorage.getItem('token-login')) {
    //   this.router.navigate(['/home'])
    // } else {
    //   this.router.navigate(['/login'])
    // }
  }
}
