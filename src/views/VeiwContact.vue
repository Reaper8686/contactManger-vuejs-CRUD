<template>
  <div class="container m-5">
    <h3>Veiw Contact</h3>
    <hr />
    <div class="row mt-5 align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img-big" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item bg-light my-2">
            Name: <span class="fw-bold">{{ contact.name }}</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Email: <span class="fw-bold">{{ contact.email }}</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Campany: <span class="fw-bold">{{ contact.company }}</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Title <span class="fw-bold">{{ contact.title }}</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Group <span class="fw-bold">{{ group.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"
          ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getContact, getGroup } from "../../apicalls/apicalls";
export default {
  name: "VeiwContact",
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      group: {},
    };
  },

  created: async function () {
    try {
      let response = await getContact(this.contactId);
      this.contact = response.data;
      let res = await getGroup(this.contact.groupId);
      this.group = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
