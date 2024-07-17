import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'testimonial',
        loadChildren: () => import('./testimonial/testimonial.module').then( m => m.TestimonialPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
