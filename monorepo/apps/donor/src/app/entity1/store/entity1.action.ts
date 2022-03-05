import { Action } from '@ngrx/store';
import {IEntity, IEntity1State} from "./entity1.state";

export const LOAD_ENTITY1_SUCCESS = 'DONOR ENTITY1 Load Entity Success';
export class LoadEntity1SuccessAction implements Action {
  constructor(payload: IEntity) {
    this.payload = payload;
  }
  public payload: IEntity;
  public readonly type = LOAD_ENTITY1_SUCCESS;
}

export const LOAD_ENTITY1_FAIL = 'DONOR ENTITY1 Load Entity Success';
export class LoadEntity1FailAction implements Action {
  public readonly type = LOAD_ENTITY1_FAIL;
  public payload: any;
}

export const LOAD_ENTITY1 = 'DONOR ENTITY1 Load Entity';
export class LoadEntity1Action implements Action {
  public readonly type = LOAD_ENTITY1;
  public payload: number;
  constructor(id: number) {
      this.payload = id;
  }
}


export const CREATE_ENTITY1_SUCCESS = 'DONOR ENTITY1 Create Entity Success';
export class CreateEntity1SuccessAction implements Action {
  constructor(data: IEntity) {
    this.payload = data;
  }
  public payload: IEntity;
  public readonly type = CREATE_ENTITY1_SUCCESS;
}

export const CREATE_ENTITY1_FAIL = 'DONOR ENTITY1 Create Entity Success';
export class CreateEntity1FailAction implements Action {
  public readonly type = CREATE_ENTITY1_FAIL;
  public payload: IEntity;
}

export const CREATE_ENTITY1 = 'DONOR ENTITY1 Create Entity';
export class CreateEntity1Action implements Action {
  public readonly type = CREATE_ENTITY1;
  public payload: IEntity;
  constructor(entity: IEntity) {
    this.payload = entity;
  }
}


export const EDIT_ENTITY1_SUCCESS = 'DONOR ENTITY1 Edit Entity Success';
export class EditEntity1SuccessAction implements Action {
  constructor(data: IEntity) {
    this.payload = data;
  }
  public payload: IEntity;
  public readonly type = EDIT_ENTITY1_SUCCESS;
}

export const EDIT_ENTITY1_FAIL = 'DONOR ENTITY1 Edit Entity Success';
export class EditEntity1FailAction implements Action {
  public readonly type = EDIT_ENTITY1_FAIL;
  public payload: IEntity;
}

export const EDIT_ENTITY1 = 'DONOR ENTITY1 Edit Entity';
export class EditEntity1Action implements Action {
  public readonly type = EDIT_ENTITY1;
  public payload: {model: IEntity} & {id: number};
  constructor(payload: {model: IEntity} & {id: number}) {
    this.payload = payload;
  }
}

export const RESET_ENTITY1 = 'DONOR ENTITY1 Reset Entity';
export class ResetEntity1Action implements Action {
  public readonly type = RESET_ENTITY1;
  public payload: any;
}


export const LOAD_ENTITIES1_SUCCESS = 'DONOR ENTITY1 Load Entities Success';
export class LoadEntities1SuccessAction implements Action {
  constructor(payload: IEntity[]) {
    this.payload = payload;
  }
  public payload: IEntity[];
  public readonly type = LOAD_ENTITIES1_SUCCESS;
}

export const LOAD_ENTITIES1_FAIL = 'DONOR ENTITY1 Load Entities Success';
export class LoadEntities1FailAction implements Action {
  public readonly type = LOAD_ENTITIES1_FAIL;
  public payload = null;
}

export const LOAD_ENTITIES1 = 'DONOR ENTITY1 Load Entities';
export class LoadEntities1Action implements Action {
  public readonly type = LOAD_ENTITIES1;
  public payload: any;
}


export const DELETE_ENTITY1_SUCCESS = 'DONOR ENTITY1 Delete Entity Success';
export class DeleteEntity1SuccessAction implements Action {
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
  public readonly type = DELETE_ENTITY1_SUCCESS;
}

export const DELETE_ENTITY1_FAIL = 'DONOR ENTITY1 Delete Entity Success';
export class DeleteEntity1FailAction implements Action {
  public readonly type = DELETE_ENTITY1_FAIL;
  public payload: number;
}

export const DELETE_ENTITY1 = 'DONOR ENTITY1 Delete Entity';
export class DeleteEntity1Action implements Action {
  constructor(payload: number) {
    this.payload = payload;
  }
  public readonly type = DELETE_ENTITY1;
  public payload: number;
}

export type AllEntitiesAction = LoadEntity1SuccessAction
    | LoadEntity1FailAction
    | LoadEntity1Action
    | CreateEntity1SuccessAction
    | CreateEntity1FailAction
    | CreateEntity1Action
    | EditEntity1SuccessAction
    | EditEntity1FailAction
    | EditEntity1Action
    | ResetEntity1Action
    | LoadEntities1SuccessAction
    | LoadEntities1FailAction
    | LoadEntities1Action
    | DeleteEntity1SuccessAction
    | DeleteEntity1FailAction
    | DeleteEntity1Action;
