import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,private router:Router) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeros();

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetails(){
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

add(name:String):void {
  name = name.trim();
  if(!name){return};
  this.heroService
      .create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero=null;
      });
 }

 delete(hero:Hero):void{
   this.heroService
       .delete(hero.id)
       .then(()=> {
         this.heroes = this.heroes.filter(h=> h != hero);
         if(this.selectedHero==hero){
           this.selectedHero= null;
         }
       });
 }

}

