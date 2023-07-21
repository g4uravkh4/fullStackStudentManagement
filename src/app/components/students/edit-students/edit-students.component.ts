import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { st } from 'src/app/models/st.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css'],
})
export class EditStudentsComponent implements OnInit {
  studentsDetails: st = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    faculty: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private _studentService: StudentsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          // call id
          this._studentService.getStudent(id).subscribe({
            next: (res) => {
              this.studentsDetails = res;
            },
          });
        }
      },
    });
  }
  updateStudent() {
    this._studentService
      .updateStudent(this.studentsDetails.id, this.studentsDetails)
      .subscribe({
        next: (res: any) => {
          this._router.navigate(['students']);
        },
      });
  }

  deleteStudent(id: string) {
    this._studentService.deleteStudent(id).subscribe({
      next: (res) => {
        this._router.navigate(['students']);
      },
    });
  }
}
