import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleOptions', () => {
    it('should toggle options when clicked', () => {
      const initialOptionsState = component.showOptions;
      component.toggleOptions();
      expect(component.showOptions).toBe(!initialOptionsState);
    });
  });

  describe('selectOption', () => {
    it('should select an option and emit the correct size', () => {
      const sizeToEmit = 25;
      const optionText = '25 por página';
      const pageSizeChangeSpy = spyOn(component.pageSizeChange, 'emit');
      
      component.selectOption(optionText, sizeToEmit);
      
      expect(component.selectedOption).toBe(optionText);
      expect(component.size).toBe(sizeToEmit);
      expect(pageSizeChangeSpy).toHaveBeenCalledWith(sizeToEmit);
      expect(component.showOptions).toBe(false);
    });
  });

  describe('onClick', () => {
    it('should close options when clicked outside the component', () => {
      component.showOptions = true;
      const outsideClickEvent = new MouseEvent('click');
      spyOn(component, 'isClickedInsideComponent').and.returnValue(false);

      component.onClick(outsideClickEvent);

      expect(component.showOptions).toBe(false);
    });

    it('should not close options when clicked inside the component', () => {
      component.showOptions = true;
      const insideClickEvent = new MouseEvent('click');
      spyOn(component, 'isClickedInsideComponent').and.returnValue(true);

      component.onClick(insideClickEvent)
    });
  });
});
