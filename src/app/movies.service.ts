import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }


  getMovieTranding(movieType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${movieType}/week?api_key=6c6a61667baf47266d6703bef33e1788`)
  }
  getMovieDetails(id: string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6c6a61667baf47266d6703bef33e1788&language=en-US`)
  }
  getVidoe(video:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${video}/videos?api_key=6c6a61667baf47266d6703bef33e1788&language=en-US`)

  }
}
