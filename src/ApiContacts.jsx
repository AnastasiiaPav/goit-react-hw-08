import axios from 'axios';

// const BASE_URL = 'https://connections-api.herokuapp.com';
const BASE_URL = 'https://639c714342e3ad692731e5c9.mockapi.io/contacts'


export const fetchContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response;
};

export const deleteContacts = async id => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response;
};

export const addContacts = async contact => {
  const response = await axios.post(BASE_URL, {
    name: contact.name,
    phone: contact.phone,
  });
  return response;
};
