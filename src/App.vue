<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
export default {
  name: "Boolfolio",
  data() {
    return {
      projects: [],
      types: [],
      technologies: [],
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
        types: "/api/types",
        technologies: "/api/technologies",
      },
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects)
        .then((response) => {
          console.log(response.data.results.data);
          this.projects = response.data.results.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /*  getTypes() {
      axios
        .get(this.baseUrl + this.apiUrls.types)
        .then((response) => {
          console.log(response.data.data);
          this.types = response.data.types.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTechnologies() {
      axios
        .get(this.baseUrl + this.apiUrls.technologies)
        .then((response) => {
          console.log(response.data.data);
          this.technologies = response.data.technologies.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, */
  },
  created() {
    this.getProjects();
  },
};
</script>
<template>
  <AppHeader />
  <AppMain :projects="projects" :types="types" :technologies="technologies" />
  <AppFooter />
</template>
<style scoped></style>
