import { Component } from '@angular/core';
import {UpdatanoteService} from '../../Services/updatanote.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent {

  notes:any[]=[];
  selectednote:any;

  parametros:any = {
    id:"",
    title:"",
    content:"",
    archive:""
  };

  constructor(private actualizar:UpdatanoteService, private http:HttpClient, private router:Router){
    this.actualizar.listnotes()
    .subscribe((data:any)=>{
      console.log(data.Note);
      this.notes=data.Note;
    });
  }

  showmodal(data:any)
  {
    this.selectednote=data;
      const modaltest=document.querySelector('.modal') as HTMLElement;
      if(modaltest){
        modaltest.style.display="block";
      } 
  }

  closemodal()
  {
    const modaltest=document.querySelector('.modal') as HTMLElement;
    if(modaltest)
    {
      modaltest.style.display="none";
    }
  }
  
  setparametros(data:NgForm)
  {
    this.parametros.id=data.value.id;
    this.parametros.title=data.value.title;
    this.parametros.content=data.value.content;
    this.parametros.archive=data.value.archive;
  }

  actualizarnota(data:NgForm)
  {
    this.setparametros(data);
    if(!this.parametros.id || !this.parametros.title || !this.parametros.content || !this.parametros.archive || this.parametros.id.trim()==='' || this.parametros.title.trim()==='' || this.parametros.content.trim()==='' || this.parametros.archive.trim()===''){
      alert("all fields are required");
      return
    }
    else
    {
      return this.actualizar.actualizarnote(this.parametros).subscribe(
        (response:any) => 
        {
          console.log('note update', response);
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/update']);
          });
        },
        (error:any) => {
          console.error('error', error);
        });
    }
   
  }

  abrirlistar(){
    this.router.navigate(['/list']);
  }

  abrirlistararchived(){
    this.router.navigate(['/listarchived']);
  }

  abrirlistarunarchived(){
    this.router.navigate(['/listunarchived']);
  }

  createnote(){
    this.router.navigate(['/create']);
  }

  deletenote(){
    this.router.navigate(['/delete']);
  }

  editnote(){
    this.router.navigate(['/update']);
  }


}
