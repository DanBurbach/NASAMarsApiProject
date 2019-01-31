import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { RoverFormComponent } from './rover-form/rover-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  },
  {
    path: 'user/photos',
    component: UserPhotosListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
