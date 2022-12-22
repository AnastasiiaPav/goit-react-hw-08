import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from 'ApiContacts';

export const fetchThunk = createAsyncThunk(
  'contacts/All',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const AddThunk = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addContacts(contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
