import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BlankPageComponent } from './blank-page.component';
import { PageHeaderModule } from './../../shared';

describe('BlankPageComponent', () => {
    let component: BlankPageComponent;
    let fixture: ComponentFixture<BlankPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                PageHeaderModule
            ],
            declarations: [BlankPageComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
