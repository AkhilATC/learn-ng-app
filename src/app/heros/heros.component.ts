import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {


  cool = HEROES;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cool)
  }
  onSelect(e:Hero){
    console.log(e)
  }

}
