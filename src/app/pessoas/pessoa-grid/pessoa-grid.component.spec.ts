import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaGridComponent } from './pessoa-grid.component';

describe('PessoaGridComponent', () => {
  let component: PessoaGridComponent;
  let fixture: ComponentFixture<PessoaGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaGridComponent]
    });
    fixture = TestBed.createComponent(PessoaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
