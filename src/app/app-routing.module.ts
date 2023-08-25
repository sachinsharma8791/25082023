import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  {
    path:'lazy',
    loadChildren: () => import ('./lazy/lazy.module').then(m=>m.LazyModule)
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'dir',
    component:DirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
