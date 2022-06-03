<template>
  <div class="container m-5">
    <p class="h3">
      Contact Manager
      <router-link to="/addcontact" class="btn btn-success"
        >Add <i class="fa fa-plus-circle"></i
      ></router-link>
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ratione ut
      totam autem quisquam illum fuga. Nemo earum quidem voluptates.
    </p>
    <!-- <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="search" />
        </div>
        <div class="col">
          <input
            type="submit"
            class="btn btn-outline-success"
            placeholder="Search"
          />
        </div>
      </div>
    </form> -->
  </div>
  <div class="container" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact.id">
        <ContactCard :contact="contact" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAllContacts } from "../../apicalls/apicalls";
import ContactCard from "../components/ContactCard.vue";
export default {
  name: "ContactMan",
  components: {
    ContactCard,
  },

  data() {
    return {
      contacts: [],
      error: "",
      loading: false,
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let response = await getAllContacts();
      console.log(response);
      this.contacts = response.data;
      console.log(this.contacts);
      this.loading = false;
    } catch (error) {
      this.error = error;
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
