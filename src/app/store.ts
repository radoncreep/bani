import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import paymentReducer from '../features/payment/paymentSlice';


export const store = configureStore({
  reducer: {
    payment: paymentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
