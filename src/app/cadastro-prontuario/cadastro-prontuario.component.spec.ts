import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProntuarioComponent } from './cadastro-prontuario.component';

describe('CadastroProntuarioComponent', () => {
  let component: CadastroProntuarioComponent;
  let fixture: ComponentFixture<CadastroProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProntuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
