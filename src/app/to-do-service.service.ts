import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor( private httpClient: HttpClient) { }

  getTasks() {
    const url = `${environment.endpoint}Task`;
    return this.httpClient.get(url);
  }

  putTask(task: any) {
    const url = `${environment.endpoint}Task`;
    return this.httpClient.post(url, task);
  }
}
