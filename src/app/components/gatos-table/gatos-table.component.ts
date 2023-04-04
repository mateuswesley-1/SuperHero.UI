import { Component, Input, OnInit } from '@angular/core';
import { Gato } from 'src/app/models/gato';
import { GatoService } from 'src/app/services/gato.service';

@Component({
  selector: 'app-gatos-table',
  templateUrl: './gatos-table.component.html',
  styleUrls: ['./gatos-table.component.css']
})
export class GatosTableComponent{
  @Input() gatos: Gato[] = [];

}
