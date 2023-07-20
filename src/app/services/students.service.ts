import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { st } from '../models/st.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private _http: HttpClient) {}

  getAllStudents(): Observable<st[]> {
    return this._http.get<st[]>(this.baseApiUrl + '/api/student');
  }

  addStuden(addStudent: st): Observable<st> {
    addStudent.id = '00000000-0000-0000-00000000';
    return this._http.post<st>(this.baseApiUrl + '/api/student', addStudent);
  }

  getStudent(id: string): Observable<st> {
    return this._http.get<st>(this.baseApiUrl + '/api/student/' + id);
  }
}
