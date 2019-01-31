import { Injectable } from '@angular/core';
import { Photo } from './photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PhotoService {
  photos: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.photos = af.list('photos');
  }
  addPhoto(newPhoto: Photo) {
    this.photos.push(newPhoto);
  }

  getPhotos() {
    return this.photos;
  }
  deletePhoto(selectedPhoto) {
    let foundPhoto = this.getPhotoById(selectedPhoto.$key);
    foundPhoto.remove();
  }
  getPhotoById(photoId: string){
    return this.af.object('photos/' + photoId);
  }

}
