import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { DeletenoteComponent } from './Components/deletenote/deletenote.component';
import { ListallComponent } from './Components/listall/listall.component';
import { ListarchivedComponent } from './Components/listarchived/listarchived.component';
import { ListunarchivedComponent } from './Components/listunarchived/listunarchived.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'create',component:CreatenoteComponent},
  {path:'update',component:UpdatenoteComponent},
  {path:'delete',component:DeletenoteComponent},
  {path:'list',component:ListallComponent},
  {path:'listarchived',component:ListarchivedComponent},
  {path:'listunarchived',component:ListunarchivedComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
