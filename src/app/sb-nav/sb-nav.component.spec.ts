
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbNavComponent } from './sb-nav.component';

describe('SbNavComponent', () => {
  let component: SbNavComponent;
  let fixture: ComponentFixture<SbNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SbNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
