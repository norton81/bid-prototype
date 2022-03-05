import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {HOST_NAME} from "@monorepo/shared";

@Injectable({
  providedIn: 'root'
})
export class Entity1Service {

  constructor(private http: HttpClient, @Inject(HOST_NAME) private host: string) { }

  async getList () {
    return await lastValueFrom(this.http.get(`${this.host}/entity1`));
  }

  async get (id: number) {
    return await lastValueFrom(this.http.get(`${this.host}/entity1/${id}`));
  }

  async delete (id: number) {
    return await lastValueFrom(this.http.delete(`${this.host}/entity1/${id}`));
  }

  async create (model: any) {
    return await lastValueFrom(this.http.post(`${this.host}/entity1`, model));
  }

  async edit (model: any, id: number) {
    return await lastValueFrom(this.http.put(`${this.host}/entity1/${id}`, model));
  }
}
