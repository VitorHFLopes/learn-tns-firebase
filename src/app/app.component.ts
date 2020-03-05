import { Component, OnInit } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    firebase.init({
      onMessageReceivedCallback: (message: firebase.Message) => {
        console.log(`Title: ${ message.title }`);
        console.log(`Body: ${ message.body }`);
        // if your server passed a custom property called 'foo', then do this:
        console.log(`Value of 'foo': ${ message.data.foo }`);
      },
      onPushTokenReceivedCallback: (token) => {
        console.log('Firebase push token: ' + token);
      },
    })
        .then(
            () => {
              console.log('firebase.init done');
            },
            (error) => {
              console.log(`firebase.init error: ${ error }`);
            },
        );
  }
}
