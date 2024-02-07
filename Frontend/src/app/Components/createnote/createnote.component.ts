import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CreatenotesService} from '../../Services/createnotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent {

  parameters:any={
    title:"",
    content:"",
    archive:""
  }

  constructor(private x:CreatenotesService, private router:Router){}

  save(y:NgForm){
    this.parameters.title=y.value.title;
    this.parameters.content=y.value.content;
    this.parameters.archive="false";
  }

  sendnotes(z:NgForm)
  {
    this.save(z);
    if(!this.parameters.title || !this.parameters.content || !this.parameters.archive || this.parameters.title.trim()==='' || this.parameters.content.trim()==='' || this.parameters.archive.trim()==='')
    {
      alert("Check the data entered");
    }else{
      this.x.insertnote(this.parameters)
      .subscribe((data:any)=>{
        console.log(data)
        if(data.Status=="Success")
        {
          const sw=confirm("note added successfully, do you want to continue adding?");
          if(sw){
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/create']);
            });
          }else{
            this.router.navigate(['/home']);
          }
        }
        else
        {
          alert("it was not possible to save the notes");
          this.router.navigate(['/home']);
        }
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
