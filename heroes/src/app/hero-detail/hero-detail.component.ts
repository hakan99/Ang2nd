import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() newItemEvent =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendIt()
  {
  this.newItemEvent.emit("hey parent component");
  }

}
