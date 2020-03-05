import { Component, OnInit } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    firebase.addOnMessageReceivedCallback(
        (message) => {
          console.dir({message});
          dialogs.alert({
            title: message.title,
            message: message.body,
            okButtonText: 'Push recebido',
          });
        },
    );
  }
}
