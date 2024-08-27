import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBeritaDetails(id: String): Observable<any> {
    const url = `${this.baseUrl}/api/getBeritaDetails/${id}`;
    return this.http.get<any>(url);
  }
  getAllBerita(): Observable<any> {
    const url = `${this.baseUrl}/api/getAllBerita`;
    return this.http.get<any>(url);
  }
}
