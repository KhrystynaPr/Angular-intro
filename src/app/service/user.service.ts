import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = `https://jsonplaceholder.typicode.com/users`;
  constructor(private http: HttpClient) {}

  getUsers(page: number = 1) {
    return this.http.get(`${this.apiUrl}?_page=${page}&_limit=5`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
