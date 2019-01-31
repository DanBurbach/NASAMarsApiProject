import { TestBed, inject } from '@angular/core/testing';

import { MarsRoverAPIPhotos} from './mars-rover-api-photos.service';

describe('MarsRoverAPIPhotos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsRoverAPIPhotos]
    });
  });

  it('should ...', inject([MarsRoverAPIPhotos], (service: MarsRoverAPIPhotos) => {
    expect(service).toBeTruthy();
  }));
});
