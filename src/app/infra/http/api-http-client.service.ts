import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Constants } from 'src/providers/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClientService {

  constants = Constants;
  defaultHeaders = new HttpHeaders();

  constructor(public http: HttpClient) {}

  public handleError(error: HttpErrorResponse) {
    const selft = this;
    if (error.error instanceof ErrorEvent) {
      // Ocurrio un error del lado del cliente o en la red de trabajo. Manipula el error.
      console.error('ApiService::Ha ocurrido un error:', error.error.message);
    } else {
      // El backend retorno un codigo de respuesta insatisfactorio.
      // El cuerpo de la respuesta puede contener pistas de que tan mal es
      console.error(`ApiService::Codigo retornado por el Backend ${error.status}, El cuerpo fue: ${error.error}`);
      if (error.status === 401) {
      }
    }
    // Retorna un observable con un mensaje de error de fachada de usuario
    return throwError('ApiService::Algo malo sucedio; Por favor, inténtelo de nuevo o más tarde.');
  };

  makeTokenHeader(token) {
    return token ? `Bearer ${token}` : '';
  }

  setHttpHeaders(headers) {
    this.defaultHeaders = headers;
  }

  getHttpHeaders() {
    let httpOptions = {
      headers: this.defaultHeaders
    };
    return httpOptions;
  }

  get(path: string) {
    return this.http.get(path, this.getHttpHeaders());
  }

  post(path: string, body: any = {}) {
    return this.http.post(path, body, this.getHttpHeaders());
  }

  put(path: string, body: any) {
    return this.http.put(path, body, this.getHttpHeaders());
  }

  delete(path: string) {
    return this.http.delete(path, this.getHttpHeaders());
  }
}