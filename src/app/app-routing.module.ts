import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path: 'example', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule) },
 { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
