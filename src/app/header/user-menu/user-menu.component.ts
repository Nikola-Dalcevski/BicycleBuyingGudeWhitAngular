import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { AuthFirebaseService } from 'src/app/auth-firebase.service';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
  router: Router;
  @Input() name: string;
  @Output() showwUserMenu = new EventEmitter<boolean>();

  constructor(router: Router, private authService: AuthFirebaseService) { 
    this.router = router;
  
  }

  log(model){
    console.log(model);
    //set the routes from the userManu
    if(model.value == "logout"){
     
      this.authService.logout();
     
      console.log("logout");
      this.showwUserMenu.emit(false);
      // this.router.navigate(['/typeOfBikes']);
    }
  }


  ngOnInit() {
    
  }

}
