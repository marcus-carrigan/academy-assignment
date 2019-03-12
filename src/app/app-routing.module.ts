import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantListComponent } from './consultant-list/consultant-list.component';

const routes: Routes = [
	{
		path: 'consultants',
		component: ConsultantListComponent,
	},
	{
		path: '',
		redirectTo: 'consultants',
		pathMatch: 'full',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
