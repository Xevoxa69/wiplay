import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidCarouselComponent } from './vid-carousel.component';

describe('VidCarouselComponent', () => {
  let component: VidCarouselComponent;
  let fixture: ComponentFixture<VidCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
