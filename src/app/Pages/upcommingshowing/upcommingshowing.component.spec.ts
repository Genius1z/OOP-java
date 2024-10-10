import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingshowingComponent } from './upcommingshowing.component';

describe('UpcommingshowingComponent', () => {
  let component: UpcommingshowingComponent;
  let fixture: ComponentFixture<UpcommingshowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcommingshowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingshowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
