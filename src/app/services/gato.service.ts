import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Gato } from '../models/gato';
@Injectable({
  providedIn: 'root'
})
export class GatoService {
  url = "Gato";
  constructor(private http: HttpClient){}

  public getAll(): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${environment.apiUrl}/${this.url}`);
  }
}
