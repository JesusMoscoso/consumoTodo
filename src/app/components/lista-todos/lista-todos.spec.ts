import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTodos } from './lista-todos';

describe('ListaTodos', () => {
  let component: ListaTodos;
  let fixture: ComponentFixture<ListaTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
