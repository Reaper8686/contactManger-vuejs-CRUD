<template>
  <div class="container m-5">
    <h3>Add Contacts</h3>
    <hr />
    <div class="row">
      <form action="">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-6 my-3">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                type="number"
                name="mobile"
                id=""
                placeholder="Mobile no."
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                type="text"
                name="photo"
                id=""
                placeholder="Photo url"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                type="text"
                name="campany"
                id=""
                placeholder="Campany Name"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <input
                type="text"
                name="title"
                id=""
                placeholder="Campany Title"
                class="form-control"
              />
            </div>
            <div class="col-sm-6 my-3">
              <select name="group" id="" class="form-control">
                <option value="">Select group</option>
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
export default {
  name: "AddContact",
};
</script>

<style scoped></style>
