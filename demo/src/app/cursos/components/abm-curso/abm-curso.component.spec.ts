import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmCursoComponent } from './abm-curso.component';

describe('AbmCursoComponent', () => {
  let component: AbmCursoComponent;
  let fixture: ComponentFixture<AbmCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
