import { createRouter, createWebHistory } from "vue-router";
import ContactMan from "../views/Contact.vue";
import AddContact from "../views/AddContact.vue";
import EditContact from "../views/EditContact.vue";
import VeiwContact from "../views/VeiwContact.vue";

const routes = [
  {
    path: "/",
    name: "contact",
    component: ContactMan,
  },
  {
    path: "/addcontact",
    name: "addcontact",
    component: AddContact,
  },
  {
    path: "/editContact/:contactId",
    name: "editContact",
    component: EditContact,
  },
  {
    path: "/veiwContact/:contactId",
    name: "veiwContact",
    component: VeiwContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
