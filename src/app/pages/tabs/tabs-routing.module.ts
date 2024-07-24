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
        path: 'testimonial',
        loadChildren: () => import('./testimonial/testimonial.module').then( m => m.TestimonialPageModule)
      },
      {
        path: 'subscribe',
        loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule)
      },
      {
        path: 'share',
        loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
