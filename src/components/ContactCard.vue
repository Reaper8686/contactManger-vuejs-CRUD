<template>
  <div class="card rounded shadow-lg mt-2">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-sm-4">
          <img :src="contact.photo" alt="" class="contact-img" />
        </div>
        <div class="col-sm-7">
          <ul class="list-group">
            <li class="list-group-item">
              Name: <span class="fw-bold">{{ contact.name }}</span>
            </li>
            <li class="list-group-item">
              Email: <span class="fw-bold">{{ contact.email }}</span>
            </li>
            <li class="list-group-item">
              Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
            </li>
          </ul>
        </div>
        <div
          class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
        >
          <router-link
            :to="`/veiwcontact/${contact.id}`"
            class="btn btn-primary my-1"
            ><i class="fa fa-eye"></i
          ></router-link>
          <router-link
            :to="`/editcontact/${contact.id}`"
            class="btn btn-warning my-1"
            ><i class="fa fa-pen"></i
          ></router-link>
          <button class="btn btn-danger my-1" @click="delContact(contact.id)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteContact } from "../../apicalls/apicalls";
export default {
  name: "ContactCard",

  props: ["contact", "toggle"],

  methods: {
    delContact: async function (id) {
      if (confirm("Are You Sure?")) {
        try {
          let res = await deleteContact(id);
          if (res) {
            this.$router.go();
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

  // data() {
  //   return {
  //     contactData: this.contact,
  //   };
  // },

  // created: function () {
  // console.log(this.contact);
  // },
};
</script>
<style></style>
