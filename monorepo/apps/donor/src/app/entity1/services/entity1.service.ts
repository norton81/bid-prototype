import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HOST_NAME} from "@monorepo/shared";
import {IEntity} from "../store/entity1.state";

@Injectable({
  providedIn: 'root'
})
export class Entity1Service {

  constructor(private http: HttpClient, @Inject(HOST_NAME) private host: string) { }

  getList (): Observable<IEntity[]>  {
    return this.http.get<IEntity[]>(`${this.host}/entity1`);
  }

  get (id: number): Observable<IEntity> {
    return this.http.get<IEntity>(`${this.host}/entity1/${id}`);
  }

  delete (id: number) {
    return this.http.delete(`${this.host}/entity1/${id}`);
  }

  create (model: any): Observable<IEntity> {
    return this.http.post<IEntity>(`${this.host}/entity1`, model);
  }

  edit (model: any, id: number): Observable<IEntity> {
    return this.http.put<IEntity>(`${this.host}/entity1/${id}`, model);
  }
}
