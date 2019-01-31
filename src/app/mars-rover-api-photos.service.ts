import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { marsRoverKey } from './api-keys';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';

@Injectable()
export class MarsRoverApiPhotos {
  constructor(private http: Http, private photoService: PhotoService) { }

  getByDateAndCamera(date: string, camera: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${marsRoverKey.nasakey}`);
  }

  saveImages(date: string, camera: string) {
  return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${marsRoverKey.nasakey}`)
    .subscribe(response => {
      let foundPhoto: Photo;
      for(let image of response.json().photos) {
        foundPhoto = new Photo(image.img_src, camera, date);
        this.photoService.addPhoto(foundPhoto);
      }
    });
  }
}
