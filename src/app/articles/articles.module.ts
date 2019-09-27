import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { SinglearticleComponent} from './components/singlearticle/singlearticle.component'



@NgModule({
  declarations: [ArticlesComponent, SinglearticleComponent ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
