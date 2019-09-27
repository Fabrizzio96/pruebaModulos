import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './shared/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesService:ArticlesService) { }
  data:any 
  ngOnInit() {
    this.articlesService.getAll().subscribe(res=>{
      this.data = res;
      console.log(this.data)
    })
  }
  onAlerta(){
    alert("se hizo click en el hijo")
  }

}
