import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDisabled.DirectiveComponent } from './inscription-disabled.directive.component';

describe('InscriptionDisabled.DirectiveComponent', () => {
  let component: InscriptionDisabled.DirectiveComponent;
  let fixture: ComponentFixture<InscriptionDisabled.DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDisabled.DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDisabled.DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
