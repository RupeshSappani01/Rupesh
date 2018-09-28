import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ProfileheaderComponent } from './profileheader/profileheader.component';
import { ProfileComponent } from './profile/profile.component';
import { TrendingComponent } from './trending/trending.component';
import { WallComponent } from './wall/wall.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PostComponent } from './post/post.component';
import { YourprofileComponent } from './yourprofile/yourprofile.component';
import { SafeurlPipe } from './safeurl.pipe';
const approutes:Routes=[
  {
    path:'',redirectTo:'index',pathMatch:'full'
  },
  {
    path:'index',component:FirstpageComponent
  },
  {
    path:'registerpage',component:RegisterComponent
  },
  {
    path:'loginpage',component:LoginComponent
  },
  {
    path:'Profile',component:ProfileComponent
  },
  {
    path:'trending',component:TrendingComponent
  },
   {
    path:'wall',component:WallComponent
  },
  {
    path:'scoreboard',component:ScoreboardComponent
  },
  {
    path:'post',component: PostComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'yourprofile',component:YourprofileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FirstpageComponent,
    ProfileheaderComponent,
    ProfileComponent,
    TrendingComponent,
    WallComponent,
    ScoreboardComponent,
    PostComponent,
    YourprofileComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
