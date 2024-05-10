import { Routes } from '@angular/router';
import {DatosGeneralesComponent} from "./inititucional/datos-generales/datos-generales.component";
import {SituacionGeograficaComponent} from "./inititucional/situacion-geografica/situacion-geografica.component";
import {MainComponent} from "./home/main/main.component";
// https://www.ssupotosi.com.bo/infomacion.html
// https://www.ssupotosi.com.bo/institucional.html

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component:MainComponent
      },
      {
        path: 'intitucional',
        children:[
          {
            path: 'datos_generales',
            component: DatosGeneralesComponent
          },
          {
            path: 'situacionGeografica',
            component: SituacionGeograficaComponent
          }
        ]
      }
    ]
  }
];
