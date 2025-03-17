import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { RouterLink } from '@angular/router';
import { OrdenadorRestService } from '../ordenador-rest.service';

@Component({
  selector: 'app-listaordenadores',
  imports: [RouterLink],
  templateUrl: './lista-ordenadores.component.html',
  styleUrl: './lista-ordenadores.component.scss'
})
export class ListaordenadoresComponent {

  listaOrdenadores:Ordenador[]=[];
  constructor(private OrdenadorRestService: OrdenadorRestService){
OrdenadorRestService.buscarTodos().subscribe((datos)=>{
  this.listaOrdenadores=datos;
})


  }

borrar(numero:number){

  this.OrdenadorRestService.borrar(numero).subscribe(()=>{
    this.OrdenadorRestService.buscarTodos().subscribe((datos)=>{
      this.listaOrdenadores=datos;
    })
  });
}
}