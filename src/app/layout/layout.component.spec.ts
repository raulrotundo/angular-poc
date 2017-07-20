import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';

import { HeaderComponent, SidebarComponent } from '../shared';
import { LayoutComponent } from './layout.component';
import { AlertService, AuthenticationService } from '../shared/services';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule,
                NgbDropdownModule.forRoot(),
                TranslateModule.forRoot(),
            ],
            declarations: [
                LayoutComponent,
                HeaderComponent,
                SidebarComponent,
            ],
            providers: [
                AuthenticationService,
                AlertService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
