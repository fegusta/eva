import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoQuadrinhosComponent } from './colecao-quadrinhos.component';

describe('ColecaoQuadrinhosComponent', () => {
  let component: ColecaoQuadrinhosComponent;
  let fixture: ComponentFixture<ColecaoQuadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoQuadrinhosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColecaoQuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
