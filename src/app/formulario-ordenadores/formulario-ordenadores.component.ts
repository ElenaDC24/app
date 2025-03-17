import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { FormsModule } from '@angular/forms';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-ordenadores',
  imports: [FormsModule],
  templateUrl: './formulario-ordenadores.component.html',
  styleUrl: './formulario-ordenadores.component.scss'
})
export class FormularioOrdenadoresComponent {

  ordenador: Ordenador={} as Ordenador;
constructor(private ordenadorRestService: OrdenadorRestService,private router:Router){

}

public insertar(){
  this.ordenadorRestService.insertar(this.ordenador).subscribe((datos)=>{
    console.log("insertado");
    this.router.navigate([""]);
  })
}
}

