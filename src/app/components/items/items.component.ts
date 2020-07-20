import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Tareas } from '../../tareas';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() tarea: Tareas;
  @HostBinding('attr.class') ccsClass = 'text-uppercase';
  constructor() { }

  ngOnInit(): void {
  }

}
