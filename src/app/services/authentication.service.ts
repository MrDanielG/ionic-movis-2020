import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  isAuthenticated(): boolean {
    // TODO esto es temporal!
    return true;
  }
}
