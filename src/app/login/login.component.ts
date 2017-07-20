import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { AlertService, AuthenticationService } from '../shared/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.loginForm.controls)
            .subscribe(
            (data) => {
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}
