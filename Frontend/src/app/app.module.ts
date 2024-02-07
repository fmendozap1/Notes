import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ListallComponent } from './Components/listall/listall.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DeletenoteComponent } from './Components/deletenote/deletenote.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { ListarchivedComponent } from './Components/listarchived/listarchived.component';
import { ListunarchivedComponent } from './Components/listunarchived/listunarchived.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListallComponent,
    CreatenoteComponent,
    DeletenoteComponent,
    UpdatenoteComponent,
    ListarchivedComponent,
    ListunarchivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
