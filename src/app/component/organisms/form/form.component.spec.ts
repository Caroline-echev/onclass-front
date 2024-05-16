import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TechnologyService } from 'src/app/services/technology.service';
import { FormErrorService } from 'src/app/services/form-error.service';
import { of, throwError } from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let technologyServiceSpy: jasmine.SpyObj<TechnologyService>;
  let formErrorServiceSpy: jasmine.SpyObj<FormErrorService>;
  let fb: FormBuilder;

  beforeEach(async () => {
    const techSpy = jasmine.createSpyObj('TechnologyService', ['addTechnology']);
    const formErrorSpy = jasmine.createSpyObj('FormErrorService', ['getErrorMessage']);

    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: TechnologyService, useValue: techSpy },
        { provide: FormErrorService, useValue: formErrorSpy }
      ]
    }).compileComponents();

    technologyServiceSpy = TestBed.inject(TechnologyService) as jasmine.SpyObj<TechnologyService>;
    formErrorServiceSpy = TestBed.inject(FormErrorService) as jasmine.SpyObj<FormErrorService>;
    fb = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with proper controls for technology model', () => {
    component.model = 'technology';
    component.ngOnInit();
    
    expect(component.form.controls['name']).toBeTruthy();
    expect(component.form.controls['description']).toBeTruthy();
  });

  it('should emit closeForm event when closed', () => {
    spyOn(component.closeForm, 'emit');
    component.onCloseForm();
    expect(component.closeForm.emit).toHaveBeenCalled();
  });

  it('should show alert when showAlert is called', () => {
    component.showAlert();

    expect(component.boolAlert).toBe(true);
  });

  it('should show error when showError is called', () => {
    component.showError();
    
    expect(component.boolError).toBe(true);
  });

  it('should close error when onCloseError is called', () => {
    component.boolError = true;

    component.onCloseError();

    expect(component.boolError).toBe(false);
  });

  it('should close form and alert when onClose is called', () => {
    component.boolAlert = true;

    spyOn(component.closeForm, 'emit');

    component.onClose();

    expect(component.closeForm.emit).toHaveBeenCalled();
    expect(component.boolAlert).toBe(false);
  });


  

  it('should get error message from FormErrorService', () => {
    const expectedErrorMessage = 'Invalid input';
    const mockControlName = 'name';
    formErrorServiceSpy.getErrorMessage.and.returnValue(expectedErrorMessage);

    const result = component.getErrorMessage(mockControlName);

    expect(result).toEqual(expectedErrorMessage);
  });
});
