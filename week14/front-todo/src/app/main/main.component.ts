import { Component, OnInit } from '@angular/core';
import { ProviderService } from './services/provider.service';
import { ITaskList, ITask } from './models/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public taskLists:ITaskList[] = [];
  public tasks:ITask[]=[];
  public curList:ITaskList;
  public name: any = '';
  public logged = false;
  public login: any = '';
  public password: any ='';
  public task_name='';


  constructor(private provider: ProviderService) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
    if(this.logged){
      this.provider.getTaskLists().then(res => {
        this.taskLists=res;
      });
    }
  }

  getTaskOfList(taskList: ITaskList){
    this.provider.getTasks(taskList.id).then(res=>{
      this.tasks = res;
    })
  }

  createTaskList() {
    if (this.name !== '') {
      this.provider.createTaskList(this.name).then(res => {
        this.name = '';
        this.taskLists.push(res);
        alert(res.name + ' is created');
      });
    }
  }

  deleteTaskList(t: ITaskList) {
    this.provider.deleteTaskList(t.id).then(res => {
      this.provider.getTaskLists().then(r => {
        this.taskLists = r;
      });
    });
  }
  createTask(){
    if(this.task_name!==''){
      console.log(this.curList);
      this.provider.createTask(this.task_name,this.curList.id).then(res=>{
        this.task_name='';
        this.tasks.push(res);
      });
    }
  }

  updateTaskList(t: ITaskList) {
    this.provider.updateTaskList(t).then(res => {
      alert(t.name + ' is updated');
    });
  }

  auth(){
    if(this.login != '' && this.password != ''){
      this.provider.auth(this.login, this.password).then(res =>{
        localStorage.setItem('token', res.token)
      });
      this.logged=true;
      this.provider.getTaskLists().then(r => {
        this.taskLists = r;
      });
    }
  }

  logout(){
    this.provider.logout().then(res =>{
      localStorage.clear();
      this.logged=false;
    })
  }


}
