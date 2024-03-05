import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

education: string[] = [
  'Matric',
  'Dipoloma',
  'Intermediate',
  'Graduate',
  'Post Graduate',
  
];
Save: any;
constructor(private fb: FormBuilder,
  private empservice: EmployeeService,
  private _dialogRef: MatDialogRef<EmpAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
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
ngOnInit(): void {
  this.empForm.patchValue(this.data);
}
 
onFormSubmit() {
  this.empservice.addEmployee(this.empForm.value).subscribe({
    next: (val:any) =>  {
      alert('Employee added successfully');
      this._dialogRef.close(true);
    },
    error: (err: any) => {
     console.log(err);
    },
  });
}

}
