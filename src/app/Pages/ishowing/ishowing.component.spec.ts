import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IshowingComponent } from './ishowing.component';

describe('IshowingComponent', () => {
  let component: IshowingComponent;
  let fixture: ComponentFixture<IshowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IshowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IshowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
