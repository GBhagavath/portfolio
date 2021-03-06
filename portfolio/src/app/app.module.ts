import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { SafePipe } from './projects/safepipe.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { FragmentPolyfillModule } from './fragment-polyfill.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectService } from './projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ContentComponent,
    ProjectsComponent,
    SafePipe,
    PageNotFoundComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FragmentPolyfillModule.forRoot({
			smooth: true
		})
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
