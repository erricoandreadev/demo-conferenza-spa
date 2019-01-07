import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { PostChildComponent } from './components/post-child/post-child.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'blog', component: PostListComponent },
  { path: 'users', component: UsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostChildComponent,
    DashboardComponent,
    PostListComponent,
    WelcomeComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
