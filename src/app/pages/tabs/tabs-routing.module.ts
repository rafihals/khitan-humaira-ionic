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
        path: 'testimonial',
        loadChildren: () => import('./testimonial/testimonial.module').then( m => m.TestimonialPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
      },
      {
        path: 'notif',
        loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
