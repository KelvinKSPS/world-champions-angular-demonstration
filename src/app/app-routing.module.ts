import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidiExampleComponent } from './component/sidi-example/sidi-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SidiExampleComponent },
  { path: 'home/:team', component: SidiExampleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
