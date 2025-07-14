import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  // heroes: Hero[] = [];

  constructor(private service: HeroService, private route: ActivatedRoute) {}
  heroes$!: Observable<Hero[]>;
  selectedId = 0;
  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getHeroes();
      })
    );
  }

  // getHeroes(): void {
  //   this.service.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  // }
}
