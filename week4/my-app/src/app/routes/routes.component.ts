import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      component: CategoriesComponent,
      resolve: {
        data: CategoriesResolver
      }
  },
  {
      path: 'questions/about/:categorySlug',
      component: CategoryQuestionsComponent,
      resolve: {
        data: CategoryQuestionsResolver
      }
  },
  {
      path: 'question/:questionSlug',
      component: QuestionAnswersComponent,
      resolve: {
        data: QuestionAnswersResolver
      }
  }
];


