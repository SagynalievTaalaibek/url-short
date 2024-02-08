import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { Links } from '../types';

export const createLink = createAsyncThunk<Links, string>(
  'links/create',
  async (link) => {
    const newLink = {
      originalUrl: link,
    };

    const linkData = await axiosApi.post<Links>('/links', newLink);
    return linkData.data;
  },
);

