import { Component } from '@angular/core';
import {ListarunarchivedService} from '../../Services/listarunarchived.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listunarchived',
  templateUrl: './listunarchived.component.html',
  styleUrls: ['./listunarchived.component.css']
})
export class ListunarchivedComponent {

  notes:any[]=[];

  constructor(private list:ListarunarchivedService, private router:Router)
  {
    this.list.listnotesunarchived()
      .subscribe((data:any)=>{
        console.log(data.Note);
        this.notes=data.Note;
      });
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
