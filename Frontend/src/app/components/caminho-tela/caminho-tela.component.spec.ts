import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoTelaComponent } from './caminho-tela.component';

describe('CaminhoTelaComponent', () => {
  let component: CaminhoTelaComponent;
  let fixture: ComponentFixture<CaminhoTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaminhoTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminhoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
