import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  constructor(private http: HttpClient) {} 

  getUsers(page: number=1) {
    const lang: any = localStorage.getItem('lang' || 'en')
    const headers: any = new HttpHeaders({
      'Accept-Language': lang
    });
    const apiUrl = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
    return this.http.get(apiUrl, {headers: headers})
  }

  getUserById(id: number) {
    const lang: any = localStorage.getItem('lang' || 'en')
    const headers: any = new HttpHeaders({
      'Accept-Language': lang
    });
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    return this.http.get(apiUrl, {headers: headers})
  }
}