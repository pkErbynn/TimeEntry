import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectUrl = 'https://project.services.turntabl.io';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  addNewProject(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      this.projectUrl + '/v1/api/project',body,{headers: headers} );
  }
  
  assignProjectToEmployee(requestBody): Observable<any> {

    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      this.projectUrl + '/v1/api/project/assign/employee',body,{headers: headers} );
  }

  getProject(): Observable<any> {
    return this.http.get<any>(this.projectUrl + '/v1/api/projects')
  }

  getAssignedProjects(employee_id: string): Observable<any> {
    return this.http.get<any>(
      this.projectUrl + '/v1/api/projects/assigned/employee/' + employee_id
    );
  }

  assignProjecttoDev(project_id: number, body:number): Observable<Project[]> {
      return this.http.post<Project[]>(this.projectUrl + "/projects/assign/"+ project_id,body);
  }

  removeProjectFromEmployee( project_id,employee_id):Observable<any>{
    return this.http.get<any>(
      this.projectUrl + '/v1/api/project/' + project_id + '/remove/employee/'+ employee_id
    );

  }
 
  getProjectByEmployeeId(employee_id): Observable<any> {
    return this.http.get<any>(
      this.projectUrl + "/v1/api/projects/assigned/employee/" + employee_id
    );
  }

}
