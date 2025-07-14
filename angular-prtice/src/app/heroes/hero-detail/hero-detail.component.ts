import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  hero$!: Observable<Hero>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.hero$ = this.service.getHero(id);
  }
  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }
}
