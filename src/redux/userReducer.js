import {USER_ACTION} from './constant'
import { produce } from 'immer';
import { Reducer } from 'redux';

const {CREATE_USER, SET_DEFAULT_USER} = USER_ACTION

const INITIAL_STATE= {
  userList: [],
 
}


const userReducer = (
  state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case SET_DEFAULT_USER: {
        // draft.todoList.push(payload);
        draft.userList = payload;
        break;
      }

      case CREATE_USER: {
        draft.userList = payload;
        break;

        // return {
        //   ...state,
        //   todoList: [
        //     ...state.todoList,
        //     {
        //       id: nanoid(),
        //       title: payload.title,
        //       desc: payload.desc,
        //       completed: false,
        //     },
        //   ],
        // };
      }

      default:
        return { ...state };
    }
  });
  // console.log(action);
};

export default userReducer;