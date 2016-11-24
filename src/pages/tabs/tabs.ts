import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { RegistrationPage } from '../registration/registration';
import { MapPage } from '../map/map';
import { ChatPage } from '../chat/chat';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RegistrationPage;
  tab3Root: any = MapPage;
  tab4Root: any = UserPage;
  tab5Root: any = ChatPage;

  constructor() {

  }
}
