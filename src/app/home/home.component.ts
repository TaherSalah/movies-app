import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}
  getMovie: any[] = [];
  getTv: any[] = [];
  getPerson: any[] = [];
  imgPrefex: string = 'https://image.tmdb.org/t/p/w500';
  imgDefult:string ='../../assets/image/taher.jpg'
  ngOnInit(): void {
    this._MoviesService.getMovieTranding('movie').subscribe((response) => {
      this.getMovie = response.results.slice(0, 11);
      console.log(this.getMovie);
    });
    this._MoviesService.getMovieTranding('tv').subscribe((response) => {
      this.getTv = response.results.slice(0, 11);
    });
    this._MoviesService.getMovieTranding('person').subscribe((response) => {
      this.getPerson = response.results.slice(0, 11);
    });
  }
}
