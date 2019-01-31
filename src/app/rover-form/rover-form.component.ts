import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotos, PhotoService]
})
export class RoverFormComponent {

  photos: any[]=null;
  noPhotos: boolean=false;

  constructor(private marsRoverPhotos: MarsRoverApiPhotos) { }

  getRoverImages(date: string, camera: string) {
    this.photos=null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0) {
        this.photos = response.json();
      }
    });
  }

  saveRoverImages(date, camera){
    this.marsRoverPhotos.saveImages(date, camera);
    alert(`The images from ${date} taken by the ${camera} camera have been saved to the database.`)
  }
}
