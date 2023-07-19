import { Component, OnInit } from '@angular/core';
import { st } from 'src/app/models/st.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: st[] = [];

  constructor(private _studentsService: StudentsService) {}

  ngOnInit(): void {
    this._studentsService.getAllStudents().subscribe({
      next: (std) => {
        this.students = std;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
