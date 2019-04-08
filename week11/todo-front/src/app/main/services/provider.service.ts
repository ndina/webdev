import { Injectable } from '@angular/core';
import { MyServiceService } from './myservice.service';
import { HttpClient } from '@angular/common/http'
import { TaskList, Task } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MyServiceService {

  constructor(http: HttpClient) {
    super(http);
   }

   getTaskLists(): Promise<TaskList[]> {
    return this.get('http://127.0.0.1:8000/api/task_lists',  {});
  }
  getTasks(id: number) {
    return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {});
  }

}
