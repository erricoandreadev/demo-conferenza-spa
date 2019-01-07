import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'blog', component: PostListComponent },
  { path: 'users', component: UsersComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
