import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
 selector:'my-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls : ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes :Hero[]=[];
  constructor(private heroService :HeroService){

  }

  ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }


}