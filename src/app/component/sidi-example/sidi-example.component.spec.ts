import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidiExampleComponent } from './sidi-example.component';

describe('SidiExampleComponent', () => {
  let component: SidiExampleComponent;
  let fixture: ComponentFixture<SidiExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidiExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
