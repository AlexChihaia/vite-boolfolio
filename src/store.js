import { reactive } from "vue";

const store = reactive({
  baseURL: "http://127.0.0.1:8000",
  apiUrls: {
    projects: "/api/projects",
  },
  params: {
    page: {
      prefix: "?page=",
      page_number: 1,
      max_pages: "",
    },
  },
  searchKey: null,
});

export default store;
