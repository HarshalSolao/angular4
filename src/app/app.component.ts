import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 4 Project!!';
  months = ['January', 'Feburary', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  isavailable = true;
  // todayDate = new Date();
  todaydate;
  componentproperty;
  jsonval = {name: 'Harshal', age: '28', address: {a1: 'Pune', a2: 'Maharashtra'}};
  changemonths(event) {
    alert('Changed month from the Dropdown');
    console.log('Changed month from the Dropdown');
    console.log(event);
   }
  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
 }
 constructor(private myservice: MyserviceService) {}
 ngOnInit() {
  this.todaydate = this.myservice.showTodayDate();
  console.log(this.myservice.serviceproperty);
      this.myservice.serviceproperty = 'component created'; // value is changed.
      this.componentproperty = this.myservice.serviceproperty;
}
}
