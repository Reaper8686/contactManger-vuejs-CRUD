<template>
  <div class="container m-5">
    <h3>Veiw Contact</h3>
    <hr />
    <div class="row mt-5 align-items-center">
      <div class="col-md-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjjIXhGg7bJjQe2t9gYL44M9VVn1MU0SWHw&usqp=CAU"
          alt=""
          class="contact-img-big"
        />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item bg-light my-2">
            Name: <span class="fw-bold">Name</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Email: <span class="fw-bold">Email</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Mobile: <span class="fw-bold">Mobile</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Campany: <span class="fw-bold">campany</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Title <span class="fw-bold">title</span>
          </li>
          <li class="list-group-item bg-light my-2">
            Group <span class="fw-bold">group</span>
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
export default {
  name: "VeiwContact",
};
</script>

<style scoped></style>
