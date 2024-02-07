import { Component } from '@angular/core';
import {ListarchivedService} from '../../Services/listarchived.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarchived',
  templateUrl: './listarchived.component.html',
  styleUrls: ['./listarchived.component.css']
})
export class ListarchivedComponent {
  notes:any[]=[];

  constructor(private list:ListarchivedService, private router:Router)
  {
    this.list.listnotesarchived()
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
