import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarListaCompraComponent } from './criar-lista-compra.component';

describe('CriarListaCompraComponent', () => {
  let component: CriarListaCompraComponent;
  let fixture: ComponentFixture<CriarListaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarListaCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarListaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
