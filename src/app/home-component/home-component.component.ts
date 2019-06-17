import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  users;
  constructor(db: AngularFireDatabase) { 
    
    this.users = db.list('/users/users');
    console.log(this.users);
    
  }

  ngOnInit() {
  }

}
