import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
    LOAD_ENTITY1,
    LoadEntity1SuccessAction,
    LoadEntity1FailAction,
    LoadEntity1Action,
    CREATE_ENTITY1,
    CreateEntity1Action,
    CreateEntity1FailAction,
    CreateEntity1SuccessAction,
    EditEntity1Action,
    EditEntity1SuccessAction,
    EditEntity1FailAction,
    EDIT_ENTITY1,
    LOAD_ENTITIES1,
    DeleteEntity1SuccessAction,
    LoadEntities1SuccessAction,
    DELETE_ENTITY1,
    DeleteEntity1Action,
    DeleteEntity1FailAction,
    LoadEntities1FailAction
} from './entity1.action';
import {Entity1Service} from "../services/entity1.service";
import {IEntity} from "./entity1.state";

@Injectable()
export class Entity1Effects {
  @Effect()
  loadEntities$ = this.actions$.pipe(
    ofType(LOAD_ENTITY1),
    mergeMap((action: LoadEntity1Action ) =>
      this.service.get(action.payload).pipe(
        map(
          (data: IEntity) =>
            new LoadEntity1SuccessAction(data)
        ),
        catchError(() => of(new LoadEntity1FailAction()))
      )
    )
  );

    @Effect()
    createEntity$ = this.actions$.pipe(
        ofType(CREATE_ENTITY1),
        mergeMap((action: CreateEntity1Action) =>
            this.service.create(action.payload).pipe(
                map(
                    (data: IEntity) =>
                        new CreateEntity1SuccessAction(data)
                ),
                catchError(() => of(new CreateEntity1FailAction()))
            )
        )
    );


    @Effect()
    editEntity$ = this.actions$.pipe(
        ofType(EDIT_ENTITY1),
        mergeMap((action: EditEntity1Action) =>
            this.service.edit(action.payload.model, action.payload.id).pipe(
                map(
                    (data: IEntity) =>
                        new EditEntity1SuccessAction(data)
                ),
                catchError(() => of(new EditEntity1FailAction()))
            )
        )
    );


    @Effect()
    loadEntities1$ = this.actions$.pipe(
        ofType(LOAD_ENTITIES1),
        mergeMap(() =>
            this.service.getList().pipe(
                map(
                    (payload: IEntity[]) =>
                        new LoadEntities1SuccessAction(payload)
                ),
                catchError(() => of(new LoadEntities1FailAction()))
            )
        )
    );

    @Effect()
    removedEntities1$ = this.actions$.pipe(
        ofType(DELETE_ENTITY1),
        mergeMap((action: DeleteEntity1Action ) =>
            this.service.delete(action.payload).pipe(
                map(
                    () =>
                        new DeleteEntity1SuccessAction(action.payload)
                ,
                catchError(() => of(new DeleteEntity1FailAction()))
            )
        )
    ));

  constructor(
    private actions$: Actions,
    private service: Entity1Service
  ) {}
}
