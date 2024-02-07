import { Component } from '@angular/core';
import { ListallnotesService } from '../../Services/listallnotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent {

  notes:any[]=[];
  constructor(private list:ListallnotesService, private router:Router)
  {
    this.list.listnotes()
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

  deletenotenav(){
    this.router.navigate(['/delete']);
  }

  editnote(){
    this.router.navigate(['/update']);
  }

}
