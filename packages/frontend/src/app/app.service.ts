import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private readonly http: HttpClient
  ) { }

  getHello() {
    return this.http.get<string>('https://www.hollyfilms.fr/aennesia/api', {
      responseType: 'text' as 'json'
    });
  }
}
