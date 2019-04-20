import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { ITaskList, ITask, IAuthResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
   }

   getTaskLists(): Promise<ITaskList[]>{
     return this.get('http://localhost:8000/api/task_lists/', {})
   }
   getTasks(id: number): Promise<ITask[]>{
    return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {id});
   }
   createTaskList(name: any): Promise<ITaskList> {
    return this.post('http://localhost:8000/api/task_lists/', {
      name: name
    });
  }

  deleteTaskList(id: number): Promise<any> {
    return this.delete(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  updateTaskList(taskList: ITaskList): Promise<ITaskList> {
    return this.put(`http://localhost:8000/api/task_lists/${taskList.id}/`, {
      name: taskList.name
    });
  }

  auth(login: any, password: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {
    });
  }

   
}
