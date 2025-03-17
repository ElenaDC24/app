import { Routes } from '@angular/router';
import { ListaordenadoresComponent } from './lista-ordenadores/lista-ordenadores.component';
import { FormularioOrdenadoresComponent } from './formulario-ordenadores/formulario-ordenadores.component';

export const routes: Routes = [
    {path:"",component:ListaordenadoresComponent},
    {path:"formulario-ordenadores",component:FormularioOrdenadoresComponent},
    {path:"lista-ordenadores", component:ListaordenadoresComponent}

];