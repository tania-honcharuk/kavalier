import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'conferences',
    loadChildren: () => import('./pages/conferences/conferences.module').then(m => m.ConferencesModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./pages/entertainment/entertainment.module').then(m => m.EntertainmentModule)
  },
  {
    path: 'vinarium',
    loadChildren: () => import('./pages/vinarium/vinarium.module').then(m => m.VinariumModule)
  },
  {
    path: 'celebrations',
    loadChildren: () => import('./pages/celebrations/celebrations.module').then(m => m.CelebrationsModule)
  },
  {
    path: 'beach',
    loadChildren: () => import('./pages/beach/beach.module').then(m => m.BeachModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }