import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  displayedColumns: string[] = [
    'id',
     'firstname',
     'lastname',
     'email',
     'dob',
     'gender',
     'education',
      'company',
     'experience',
    'package',
    'action',

];
dataSource!: MatTableDataSource<any>;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  private _empService: any;
company: any;
INR: string|undefined;



  constructor(private _dialog: MatDialog,
   private empService:EmployeeService
   ) {}
   ngOnInit(): void {
    this.getEmployeeList();
   }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef .afterClosed() .subscribe({
      next: (val) => {
        if(val) {
          this.getEmployeeList();
        }
      },
    });
  }
  getEmployeeList() {
    this.empService.getEmployeeList().subscribe({
      next: (res: any) => {
        console.log('Allu data',res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;   
       }
    });
  }  
  applyFilter(event:Event) {
    const filterValue = ( event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id:number){
    this.empService.delateEmployee(id).subscribe({
      next: (res: any) => {
        alert('Employee deleted!');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }
  openEditForm(data:any) {
    this. _dialog.open(EmpAddEditComponent,{
      data,
    });
  }

      }
      
    
  

