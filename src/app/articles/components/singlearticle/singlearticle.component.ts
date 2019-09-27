import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.scss']
})
export class SinglearticleComponent implements OnInit {
@Input() data:any
@Output() alerta = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
}
