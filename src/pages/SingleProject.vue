<script>
// IMPORTS

import axios from "axios";
import store from "../store";

// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {
      store,
      project: {},
      params: {
        slug: this.$route.params.slug,
      },
    };
  },
  methods: {
    getProject() {
      axios
        .get(
          this.store.baseURL +
            this.store.apiUrls.projects +
            "/" +
            this.params.slug
        )
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            this.project = response.data.result;
          } else {
            this.$router.push({ name: "not-found" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    // Da aggiungere se vogliamo post linkati
    // this.$watch(
    //     () => this.$route.params,
    //     (toParams, previousParams) => {
    //         this.getProject();
    //     }),
    this.getProject();
  },
};
</script>
<template>
  <div class="container my-3">
    <div class="card mb-5">
      <img
        :src="project.thumb"
        class="card-img-top card-img"
        alt="Project Image"
      />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          <strong>Project category:</strong> {{ project.category }}
        </p>
        <p class="card-text">
          <strong>Project status:</strong> {{ project.status }}
        </p>
        <p class="card-text">
          <strong>Project type:</strong> {{ project.type.title }}
        </p>
        <p class="card-text">
          <strong>Project technologies:</strong>
          <span v-for="technology in project.technologies" class="technology">{{
            technology.title
          }}</span>
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card reviews-card">
          <div class="card-body">
            <h5 class="card-title">Reviews</h5>
            <p class="card-text">
              Check out what people are saying about this project:
            </p>
            <!-- Add reviews content here -->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card message-card">
          <div class="card-body">
            <h5 class="card-title">Leave a Message</h5>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reviews-card,
.message-card {
  border: none;
  border-radius: 15px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.reviews-card:hover,
.message-card:hover {
  transform: translateY(-5px);
}

.reviews-card .card-title,
.message-card .card-title {
  color: #ff5e00;
  font-weight: bold;
}

.reviews-card .card-text,
.message-card .card-text {
  color: #555;
}

.reviews-card .card-text::before,
.message-card .card-text::before {
  content: "\f111";
  font-family: "Font Awesome 5 Free";
  font-size: 24px;
  color: #ff5e00;
  margin-right: 5px;
}

.technology {
  background-color: #ff5e00;
  color: #fff;
  border-radius: 5px;
  margin-right: 5px;
  padding: 2px 5px;
}
</style>
