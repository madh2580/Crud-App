import { Component } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

education: string[] = [
  'Matric',
  'Dipoloma',
  'Intermediate',
  'Graduate',
  'Post Graduate',
  
];
constructor(private fb: FormBuilder,
  private empservice: EmployeeService,
  private _dialogRef: DialogRef<EmpAddEditComponent>) {
  this.empForm = this.fb.group({
    firstName:'',
    lastName:'',
    email:'',
    dob:'',
    gender:'',
    education:'',
    company:'',
    experience:'',
    package:'',
  })
}
onFormSubmit() {
  if (this.empForm.valid) {
   this.empservice.addEmployee(this.empForm.value).subscribe({
    next: (val:any) =>  {
      alert('Employee added successfully');
      this._dialogRef.close();
    },
    error: (err: any) => {
     console.log(err);
    },
  });
    
}
console.log('allu data',this.empForm)
  }
}

