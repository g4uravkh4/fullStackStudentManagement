import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private _studentService: StudentsService
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
}
