import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './@shell/ui/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module'),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/pages/contact/contact.module'),
  },

  {
    path: 'location',
    loadChildren: () =>
      import('./pages/location/pages/location/location.module'),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
