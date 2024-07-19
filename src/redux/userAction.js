import { USER_ACTION } from './constant';

const { CREATE_USER } = USER_ACTION;

export const createUserAction = (userlist) => {
  return {
    type: CREATE_USER,
    payload: userlist,
  };
};
