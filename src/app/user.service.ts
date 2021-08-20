import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  constructor(private http: HttpClient) {}

  getUsers(page: number=1) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
    return this.http.get(apiUrl)
  }

}
