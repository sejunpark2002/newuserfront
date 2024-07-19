import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
// import { all } from 'redux-saga/effects';
// import createSagaMiddleware from 'redux-saga';
// import { todoSagaWatcher } from 'redux/todo/todoSaga';
import userReducer from '../redux/userReducer';

// const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([
//     todoSagaWatcher(),
//     // Other sagas...
//   ]);
// }

export const createStore = () =>
  configureStore({
    reducer: {
      userReducer,
      // Other reducers...
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

// sagaMiddleware.run(rootSaga);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Using useAppSelector instead of useSelector
// 1. Don't need to access 'react-redux' module every time in every component
// 2. In typescript, don't need to specify state type (RootState) every time
// export function useAppSelector(fn: (state: RootState) => T): T {
//   return useSelector<RootState, T>(fn);
// }

export function useAppSelector(fn) {
  return useSelector(fn);
}

// Using useAppDispatch instead of useDispatch
// 1. Don't need to access 'react-redux' module every time in every component
// 2. In typescript, don't need to specify dispatch type (AppDispatch (connect with store)) every time
export const useAppDispatch = () => useDispatch();
