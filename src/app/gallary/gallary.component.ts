import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  displayPerson:any[]=[];
  imgPrefex: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) { }
  
  ngOnInit(): void {
    this._MoviesService.getMovieTranding('person').subscribe((responce)=>{
      this.displayPerson=responce.results;
    })
  }

}
