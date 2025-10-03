import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTarea } from './info-tarea';

describe('InfoTarea', () => {
  let component: InfoTarea;
  let fixture: ComponentFixture<InfoTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
