import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {path: 'second-page', component: SecondPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
