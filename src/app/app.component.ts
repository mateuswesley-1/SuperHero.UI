import { Component, OnInit } from '@angular/core';
import { Gato } from './models/gato';
import { GatoService } from './services/gato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Gatos.UI';
  gatos: Gato[] = [];

  constructor(private gatoService: GatoService) {}

  ngOnInit(): void {
    this.gatoService
      .getAll()
      .subscribe((result: Gato[]) => {
      this.gatos = result;
    });
  }




}
