<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
import store from "../store";
export default {
  name: "ProjectList",
  data() {
    return {
      store,
      responseData: {},

      projects: [],
      loading: false,
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    getProjects() {
      this.loading = true;
      axios
        .get(
          this.store.baseURL +
            this.store.apiUrls.projects +
            this.store.params.page.prefix +
            this.store.params.page.page_number,
          {
            params: {
              key: this.store.searchKey,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.projects = response.data.results.data;
          this.store.params.page.max_pages = response.data.results.last_page;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.projects = [];
        });
    },
    showProject(project) {
      console.log(this.projects);
      console.log("Navigating to project:", project);
      // Assuming you have a route for the project's show page,
      // you can use Vue Router to navigate to that page
      this.$router.push(`/projects/${project.slug}`);
    },
    prevPage() {
      if (this.store.params.page.page_number > 1) {
        this.store.params.page.page_number--;
        this.$router.push({
          name: "projects",
          query: {
            page: this.store.params.page.page_number,
            key: this.store.searchKey,
          },
        });
        this.getProjects();
      }
    },
    nextPage() {
      if (
        this.store.params.page.page_number < this.store.params.page.max_pages
      ) {
        this.store.params.page.page_number++;
        this.$router.push({
          name: "projects",
          query: {
            page: this.store.params.page.page_number,
            key: this.store.searchKey,
          },
        });
        this.getProjects();
      }
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <body>
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
      <h3 class="pt-5 text-center">My projects</h3>
      <ul class="row g-5">
        <li
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          v-for="project in projects"
          :key="project.id"
        >
          <ProjectCard
            @click="showProject(project)"
            :key="project.id"
            :project="project"
            :responseData="responseData"
          />
        </li>
      </ul>
      <div class="container">
        <nav aria-label="Page navigation example" class="scroller my-5">
          <ul class="pagination d-flex justify-content-between">
            <li @click="prevPage()">
              <span
                aria-hidden="true"
                class="btn btn-warning"
                v-show="this.store.params.page.page_number > 1"
                >Previous</span
              >
            </li>
            <li @click="nextPage()">
              <span
                aria-hidden="true"
                class="btn btn-warning"
                v-if="
                  store.params.page.page_number < store.params.page.max_pages
                "
                >Next</span
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
.loader {
  padding: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
body {
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1f1f1f;
  color: #fff;
}
</style>
