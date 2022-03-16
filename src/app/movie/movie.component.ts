import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  displayMovieComponent:any[]=[];
  imgPrefex: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService , private _HttpClient: HttpClient) { }

  ngOnInit(): void {
    this._MoviesService.getMovieTranding('movie').subscribe((responce)=>{
      this.displayMovieComponent=responce.results;
    })
  }

}
