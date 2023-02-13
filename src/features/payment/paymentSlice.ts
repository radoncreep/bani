import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { RootState } from '../../app/store';
import { PaymentResponse } from './payment.types';


export interface PaymentState {
  data: PaymentResponse['data'] | Record<string, any> | null;
  status: 'idle' | 'loading' | 'failed';
  error: Error['message'] | any | null;
}

const initialState: PaymentState = {
  data: null,
  status: 'idle',
  error: null
};

export const fetchPayment = createAsyncThunk(
    'payment/fetchPayment',
    async (page_ref: string) => {
      const response: AxiosResponse<PaymentResponse, any> = await axios
        .get(`https://stage.getbani.com/api/v1/comhub/direct_payment_page_details/${page_ref}`);

      return response.data;
    }
);

export const paymentSlice = createSlice({
    name: "payment", 
    initialState,
    reducers: {
        // storePayment: (state, ) 
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchPayment.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPayment.fulfilled, (state, action) => {
            state.status = 'idle';
            state.data = action.payload.data;
        })
        .addCase(fetchPayment.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
        })
    }
});


export const selectPaymentValue = (state: RootState) => state.payment.data;

export default paymentSlice.reducer;
