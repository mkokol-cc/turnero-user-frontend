import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecerClaveComponent } from './reestablecer-clave.component';

describe('ReestablecerClaveComponent', () => {
  let component: ReestablecerClaveComponent;
  let fixture: ComponentFixture<ReestablecerClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablecerClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestablecerClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
