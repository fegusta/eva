import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTreinoComponent } from './controle-treino.component';

describe('ControleTreinoComponent', () => {
  let component: ControleTreinoComponent;
  let fixture: ComponentFixture<ControleTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleTreinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
