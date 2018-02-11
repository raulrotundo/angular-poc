import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(loginForm: any) {
        return this.http.post(environment.apiEndpoint + 'api/authenticate', {
            username: loginForm.username.value,
            password: loginForm.password.value
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
    }
}
