import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-photos-list',
  templateUrl: './user-photos-list.component.html',
  styleUrls: ['./user-photos-list.component.css'],
  providers: [ PhotoService ]
})
export class UserPhotosListComponent implements OnInit {
  constructor(private photoService: PhotoService) { }
  savedPhotos: FirebaseListObservable <any[]> = null;

  ngOnInit() {
    this.savedPhotos = this.photoService.getPhotos();
  }

  deletePhoto(selectedPhoto: Photo) {
    this.photoService.deletePhoto(selectedPhoto);
    alert("This image has been deleted from your list of saved images.");
  }
  
}
