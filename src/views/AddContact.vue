<template>
  <div class="container m-5">
    <h3>Add Contacts</h3>
    <hr />
    <div class="row">
      <form action="" @submit.prevent="onSubmit">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.name"
                type="text"
                name="name"
                id=""
                placeholder="Name"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.email"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.mobile"
                type="number"
                name="mobile"
                id=""
                placeholder="Mobile no."
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.photo"
                type="text"
                name="photo"
                id=""
                placeholder="Photo url"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.campany"
                type="text"
                name="campany"
                id=""
                placeholder="Campany Name"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                v-model="contacts.title"
                type="text"
                name="title"
                id=""
                placeholder="Campany Title"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <select
                v-model="contacts.groupId"
                name="group"
                id=""
                class="form-control"
              >
                <option value="">Select group</option>
                <option
                  :value="group.id"
                  v-for="group in groups"
                  :key="group.id"
                >
                  {{ group.name }}
                </option>
              </select>
            </div>

            <div class="col-sm-7 my-3">
              <input type="submit" class="btn btn-outline-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAllGroups, addContact } from "../../apicalls/apicalls";
export default {
  name: "AddContact",
  data: function () {
    return {
      contacts: {
        name: "",
        email: "",
        mobile: "",
        photo: "",
        campany: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },
  methods: {
    onSubmit: async function () {
      try {
        let response = await addContact(this.contacts);
        if (response) {
          return this.$router.push("/");
        }
        this.$router.push("/addcontacts");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created: async function () {
    try {
      let response = await getAllGroups();
      this.groups = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
