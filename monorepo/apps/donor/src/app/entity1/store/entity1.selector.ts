import { IAppState } from '../../store/app.state';

export const selectEntity = (state: IAppState) => {
  return state?.entity1?.current;
}

export const selectEntities = (state: IAppState) => {
  return state?.entity1?.entities;
}
