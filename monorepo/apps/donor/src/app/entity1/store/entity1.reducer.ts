import {IEntity1State} from './entity1.state';
import {
  AllEntitiesAction,
  CREATE_ENTITY1_SUCCESS,
  DELETE_ENTITY1_SUCCESS,
  EDIT_ENTITY1_SUCCESS,
  LOAD_ENTITIES1_SUCCESS,
  LOAD_ENTITY1_SUCCESS,
  RESET_ENTITY1
} from './entity1.action';

export function entity1Reducer(state: IEntity1State, action: AllEntitiesAction) {
  switch (action.type){
    case LOAD_ENTITY1_SUCCESS:
    case CREATE_ENTITY1_SUCCESS:
    case EDIT_ENTITY1_SUCCESS:
      return {
        ...state || {},
        ...{
          current: action.payload
        }
      }
    case RESET_ENTITY1: {
      const result = {
        ...state || {},
        ...{
          current: null
        }
      };
      return result;
    }

    case LOAD_ENTITIES1_SUCCESS: {
      const result = {
        ...state || {},
        ...{
          entities: action.payload
        }
      };
      return result;
    }

    case DELETE_ENTITY1_SUCCESS: {

      const entities = state.entities.filter( (item) => {
        return item._id !== action.payload;
      });

      const result = {
        ...state || {},
        ...{
          entities: [...entities]
        }
      };
      return result;
    }
  }
  return state;
}
