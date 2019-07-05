import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthFirebaseService } from 'src/app/shared-module/shared services/auth-firebase.service';


@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input() name: string;
  @Output() showwUserMenu = new EventEmitter<boolean>();
  showHideUserMenu: boolean = true;
  constructor(private authService: AuthFirebaseService) { }

  dropDown() {
    this.showHideUserMenu = !this.showHideUserMenu;
  }

  log(model) {
    console.log(model);
    event.preventDefault();
    this.authService.logout();
    console.log("logout");
    this.showwUserMenu.emit(false);
  }


  ngOnInit() {

  }

}
