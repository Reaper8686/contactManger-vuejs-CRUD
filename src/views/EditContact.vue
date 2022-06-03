<template>
  <div class="container m-5">
    <h3>Edit Contacts</h3>
    <hr />
    <div class="row">
      <form action="" @submit.prevent="onUpdate">
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
                v-model="contacts.company"
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
                name="group"
                id=""
                v-model="contacts.groupId"
                class="form-control"
                v-if="groups.length > 0"
              >
                <option value="">Select group</option>
                <option
                  :value="group.id"
                  v-for="group of groups"
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
import {
  updateContact,
  getContact,
  getAllGroups,
} from "../../apicalls/apicalls";
export default {
  name: "EditContact",
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contacts: {
        name: "",
        email: "",
        mobile: "",
        photo: "",
        company: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },

  methods: {
    onUpdate: async function () {
      try {
        let res = await updateContact(this.contacts, this.contactId);
        if (res) {
          return this.$router.push("/");
        }
        this.$router.push("/editcontacts");
      } catch (error) {
        console.log(error);
      }
    },
  },

  created: async function () {
    try {
      let res1 = await getContact(this.contactId);
      this.contacts = res1.data;
      let res2 = await getAllGroups();
      this.groups = res2.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
