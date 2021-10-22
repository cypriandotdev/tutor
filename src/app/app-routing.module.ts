import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ArticlesComponent} from "./articles/articles.component";
import {TutorComponent} from "./tutor/tutor.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path:"portfolio",component:PortfolioComponent},
  {path:"articles",component:ArticlesComponent},
  {path:"",component:TutorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
