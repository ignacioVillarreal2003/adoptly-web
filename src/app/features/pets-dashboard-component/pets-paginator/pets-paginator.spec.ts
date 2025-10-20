import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPaginator } from './pets-paginator';

describe('PetsPaginator', () => {
  let component: PetsPaginator;
  let fixture: ComponentFixture<PetsPaginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsPaginator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsPaginator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
