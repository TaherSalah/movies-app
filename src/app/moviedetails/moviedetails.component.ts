import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  id:string='';
  movieDetails:any={};
  videoDisplay:any={}
  imgPrefex: string = 'https://image.tmdb.org/t/p/w500';
  /* Display vedio */

  constructor(private _MovieService: MoviesService , private _ActivatedRoute: ActivatedRoute ,private _HttpClient:HttpClient) {
    this.id =_ActivatedRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
     this._MovieService.getMovieDetails(this.id).subscribe((response)=>{
      this.movieDetails =response;
    });
    this._MovieService.getVidoe(this.id).subscribe((response)=>{
      this.videoDisplay=response
    })


  }
}
