<script>
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      store,
      project: {},
      params: {
        slug: this.$route.params.slug,
      },
      loading: false,
    };
  },
  methods: {
    async getProject() {
      this.loading = true;
      try {
        const response = await axios.get(
          `${this.store.baseURL}${this.store.apiUrls.projects}/${this.params.slug}`
        );
        if (response.data.status) {
          this.loading = false;
          this.project = response.data.result;
        } else {
          this.$router.push({ name: "not-found" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<template>
  <body class="py-3">
    <div
      v-if="loading"
      class="loader container my-5 d-flex justify-content-center"
    >
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="card mb-5">
        <img
          :src="project.thumb"
          class="card-img-top card-img"
          alt="Project Image"
        />
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">
            <strong>Category:</strong> {{ project.category }}
          </p>
          <p class="card-text"><strong>Status:</strong> {{ project.status }}</p>
          <p class="card-text">
            <strong>Type:</strong> {{ project.type.title }}
          </p>
          <p class="card-text">
            <strong>Technologies:</strong>
            <span v-for="technology in project.technologies" class="technology">
              {{ technology.title }}
            </span>
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
                <button type="submit" class="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
body {
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1f1f1f;
  color: #fff;
}

.loader {
  padding: 350px;
}
.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  color: #ff5e00;
  font-weight: bold;
}

.card-text {
  color: #555;
}

.technology {
  background-color: #ff5e00;
  color: #fff;
  border-radius: 5px;
  margin-right: 5px;
  padding: 2px 5px;
}

.reviews-card,
.message-card {
  border: none;
  background-color: #f8f9fa;
}

button {
  background-color: #ff5e00;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff7f2a;
}

.reviews-card,
.message-card {
  margin-top: 20px;
}

.btn-block {
  width: 100%;
  margin-top: 10px;
}
</style>
