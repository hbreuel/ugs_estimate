import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTrComponent } from './cliente-tr.component';

describe('ClienteTrComponent', () => {
  let component: ClienteTrComponent;
  let fixture: ComponentFixture<ClienteTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteTrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
