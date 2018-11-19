import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleProfilComponent } from './single-profil/single-profil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { UserListComponent } from './user-list/user-list.component';
import{UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { NewComponent } from './new/new.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';



const appRoutes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {path : 'profil',component:ProfilViewComponent},
  {path : 'auth', component:AuthComponent},
  {path: 'profil/:id',component:SingleBlogComponent},
  {path : 'new', component:NewPostComponent},
  {path : '', component:ProfilViewComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path:'edit', canActivate:[AuthGuardService], component:EditProfilComponent },
  {path:'users', component:UserListComponent},
  {path:'new-users', component:NewUserComponent},
  {path : '**', redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent,
    ProfilViewComponent,
    AuthComponent,
    SingleProfilComponent,
    FourOhFourComponent,
    EditProfilComponent,
    UserListComponent,
    NewUserComponent,
    NewComponent,
    NewPostComponent,
    SingleBlogComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
