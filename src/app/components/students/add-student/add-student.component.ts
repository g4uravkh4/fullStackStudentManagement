import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { st } from 'src/app/models/st.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudents: st = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    faculty: '',
  };
  constructor(private _service: StudentsService, private _router: Router) {}
  ngOnInit(): void {}

  addStudent() {
    console.log(this.addStudents);
    this._service.addStuden(this.addStudents).subscribe({
      next: (st) => {
        this._router.navigate(['students']);
      },
    });
  }
}
