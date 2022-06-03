const APIURL = "http://localhost:8000";
import axios from "axios";

export const getAllContacts = () => {
  return axios.get(`${APIURL}/contacts`);
};

export const getContact = (id) => {
  return axios.get(`${APIURL}/contacts/${id}`);
};

export const addContact = (contact) => {
  return axios.post(`${APIURL}/contacts`, contact);
};

export const updateContact = (contact, id) => {
  return axios.put(`${APIURL}/contacts/${id}`, contact);
};

export const deleteContact = (id) => {
  return axios.delete(`${APIURL}/contacts/${id}`);
};

export const getAllGroups = () => {
  return axios.get(`${APIURL}/groups`);
};

export const getGroup = (id) => {
  return axios.get(`${APIURL}/groups/${id}`);
};
