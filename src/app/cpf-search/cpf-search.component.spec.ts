import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfSearchComponent } from './cpf-search.component';

describe('CpfSearchComponent', () => {
  let component: CpfSearchComponent;
  let fixture: ComponentFixture<CpfSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
