import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'news-detail/:id',
    loadChildren: () =>
      import('./pages/news-detail/news-detail.module').then(
        m => m.NewsDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
