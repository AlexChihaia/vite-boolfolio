<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
export default {
  name: "ProjectList",
  data() {
    return {
      responseData: {},
      currentPage: 1,
      projects: [],
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects, {
          params: { page: this.currentPage },
        })
        .then((response) => {
          console.log(response.data.results);
          this.projects = response.data.results.data;
          this.responseData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    prevPage() {
      this.currentPage--;
      this.getProjects();
    },
    nextPage() {
      this.currentPage++;
      this.getProjects();
    },
  },
  created() {
    this.getProjects();
    console.log(this.projects);
  },
};
</script>

<template>
  <div class="container">
    <h3 class="pt-5 text-center">My projects</h3>
    <ul class="row g-5">
      <li
        class="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
        v-for="project in responseData.results?.data"
      >
        <ProjectCard :project="project" :responseData="responseData" />
      </li>
    </ul>
    <div class="container">
      <nav aria-label="Page navigation example" class="scroller my-5">
        <ul class="pagination d-flex justify-content-between">
          <li @click="prevPage">
            <span
              aria-hidden="true"
              class="btn btn-primary"
              v-show="responseData.results?.prev_page_url"
              >Previous</span
            >
          </li>
          <li @click="nextPage">
            <span
              v-show="responseData.results?.next_page_url"
              aria-hidden="true"
              class="btn btn-primary"
              >Next</span
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
