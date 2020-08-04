import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../tareas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  nombre: string = 'Davian Ascanio';
  tareas: Tareas[];
  constructor() {
    this.tareas = [];
  }

  ngOnInit(): void {
  }

  guardar(item): boolean{
    // tslint:disable-next-line: object-literal-shorthand
    this.tareas.push({ tarea: item});

    return false;
  }
  procesaPropagar(mensaje) {
    alert(mensaje);
  }

}
