import { Links } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { createLink } from './linkThunks';
import { RootState } from '../app/store';

interface LinkState {
  link: null | Links;
  createLoading: boolean;
}

const initialState: LinkState = {
  link: null,
  createLoading: false,
};

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createLink.pending, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createLink.fulfilled, (state, {payload}) => {
      state.link = payload;
      state.createLoading = false;
    });
    builder.addCase(createLink.rejected, (state) => {
      state.createLoading = false;
    });
  }
});

export const linkReducer = linkSlice.reducer;

export const selectLink = (state: RootState) => state.link.link;
export const selectCreateLinkLoading = (state: RootState) => state.link.createLoading;