import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosTableComponent } from './gatos-table.component';

describe('GatosTableComponent', () => {
  let component: GatosTableComponent;
  let fixture: ComponentFixture<GatosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
