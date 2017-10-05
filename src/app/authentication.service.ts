import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

/*werkt niet met FirebaseListObservable
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
*/

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;

  constructor(public firebaseAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
    this.items = af.list('/Users');
/*
    this.items.subscribe((x) => alert('ouwhraoigjknwuergf'));
*/
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
