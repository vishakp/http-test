import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit {
  public items = [];

  constructor(
    private photos: PhotosService
  ) { }

  ngOnInit() {
    this.apiCall();
    console.log(this.items);
  }
  apiCall() {
  this.photos.getPhotos()
    .subscribe( data => this.items = data )
     }
}

