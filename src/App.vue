<script>
import AppHeader from "./components/AppHeader.vue";
/* import AppMain from "./components/AppMain.vue"; */
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "Boolfolio",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {},
  getTypes() {
    a;
  },

  created() {},
};
</script>
<template>
  <AppHeader />
  <!--   <AppMain :projects="projects" :types="types" :technologies="technologies" /> -->
  <router-view></router-view>
  <AppFooter />
</template>
<style scoped>

</style>
