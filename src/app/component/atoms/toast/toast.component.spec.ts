import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeError event after 5 seconds', fakeAsync(() => {
    spyOn(component.closeError, 'emit');
    
    component.ngOnInit();

    tick(5000);

    expect(component.closeError.emit).toHaveBeenCalled();
  }));
});
