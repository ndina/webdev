import { Component, OnInit, Provider } from '@angular/core';
import { ProviderService } from './services/provider.service';
import { TaskList, Task} from './models/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public taskLists: TaskList[] = [];
  public tasks: Task[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    });
  }
  getTaskOfTaskList(taskList: TaskList) {
    this.provider.getTasks(taskList.id).then(res => {this.tasks = res; });
  }
}
