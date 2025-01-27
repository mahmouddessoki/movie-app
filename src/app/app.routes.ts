import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MtDetailsComponent } from './components/mt-details/mt-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', loadComponent: () => import("./components/movie/movie.component").then(c => c.MovieComponent) },
  { path: 'tvshow', loadComponent: () => import("./components/tv-show/tv-show.component").then(c => c.TvShowComponent) },
  { path: 'people', loadComponent: () => import("./components/people/people.component").then(c => c.PeopleComponent) },
  {path: 'details/:media/:id' , component: MtDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: NotfoundComponent }

];
