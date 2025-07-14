import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  /** GET heroes from the mock data */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number | string): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === +id);
    if (!hero) throw new Error(`Hero with id ${id} not found`);
    return of(hero);
  }
}
