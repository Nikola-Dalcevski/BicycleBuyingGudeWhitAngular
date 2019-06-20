import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthFirebaseService } from 'src/app/auth-firebase.service';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
  @Input() name: string;
  @Output() showwUserMenu = new EventEmitter<boolean>();

  constructor( private authService: AuthFirebaseService) { }

  log(model){
    console.log(model);
 
    if(model.value == "logout"){
     
      this.authService.logout();
     
      console.log("logout");
      this.showwUserMenu.emit(false);
   
    }
  }


  ngOnInit() {
    
  }

}
