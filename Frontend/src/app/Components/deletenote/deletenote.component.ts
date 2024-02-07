import { Component } from '@angular/core';
import {DeletenotesService} from '../../Services/deletenotes.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrls: ['./deletenote.component.css']
})
export class DeletenoteComponent {

  notes:any[]=[];

  constructor(private eliminar:DeletenotesService, private router:Router, private http:HttpClient)
  {
    this.eliminar.listnotes()
      .subscribe((data:any)=>{
        console.log(data.Note);
        this.notes=data.Note;
      });
  }

  deletenote(id:number){
    return this.http.delete(`http://127.0.0.1:300/apinotes/delete/${id}`).subscribe(
      response => {
        console.log('note delete', response);
        this.notes = this.notes.filter(note => note.idNote !== id);
        this.router.navigate(['/delete']); 
      },
      error => {
        console.error('error', error);
      }
    );
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
