import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { glob} from 'glob';
import {Subject} from 'rxjs';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get nativeWindow() : any {
      return _window();
   }

  constructor() { }
}
