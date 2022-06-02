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
    <form>
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
    </form>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card bg-dark rounded shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjjIXhGg7bJjQe2t9gYL44M9VVn1MU0SWHw&usqp=CAU"
                  alt=""
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">Name</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">Email</span>
                  </li>
                  <li class="list-group-item">
                    Mobile: <span class="fw-bold">Mobile</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  to="/veiwcontact/:contactId"
                  class="btn btn-primary my-1"
                  ><i class="fa fa-eye"></i
                ></router-link>
                <router-link
                  to="/editcontact/:contactId"
                  class="btn btn-warning my-1"
                  ><i class="fa fa-pen"></i
                ></router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMan",
};
</script>

<style scoped></style>
