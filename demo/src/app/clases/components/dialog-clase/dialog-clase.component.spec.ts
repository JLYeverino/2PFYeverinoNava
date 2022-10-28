import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClaseComponent } from './dialog-clase.component';

describe('DialogClaseComponent', () => {
  let component: DialogClaseComponent;
  let fixture: ComponentFixture<DialogClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
