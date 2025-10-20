import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsToolbar } from './pets-toolbar';

describe('PetsToolbar', () => {
  let component: PetsToolbar;
  let fixture: ComponentFixture<PetsToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
