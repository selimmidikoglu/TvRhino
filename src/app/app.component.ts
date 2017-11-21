import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      firebase.initializeApp({
        apiKey: "AIzaSyAdAZHdnMhw3ZbiQ17DlrEpBoEmtREOI3w",
        authDomain: "tvrhino-c026e.firebaseapp.com",
        databaseURL: "https://tvrhino-c026e.firebaseio.com",
        projectId: "tvrhino-c026e",
        storageBucket: "tvrhino-c026e.appspot.com",
        messagingSenderId: "510150830960"
      });
      const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        } else { 
          this.rootPage = 'LoginPage';
          unsubscribe();
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

