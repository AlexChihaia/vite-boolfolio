<script>
export default {
  name: "Header",
};
</script>
<template>
  <header class="bg-success">
    <div class="container d-flex justify-content-between py-3">
      <div>
        <a class="nav-link w-25" href="">
          <h3 class="text-uppercase">Boolfolio</h3>
        </a>
      </div>
      <ul class="nav">
        <router-link :to="{ name: 'home' }" class="nav-link">
          <span>Home</span>
        </router-link>

        <router-link :to="{ name: 'projects' }" class="nav-link">
          <span>Projects</span>
        </router-link>

        <router-link :to="{ name: 'about' }" class="nav-link">
          <span>About</span>
        </router-link>
      </ul>
    </div>
  </header>
</template>
<style lang="scss" scoped>
a {
  font-size: 1.5rem;
  h3 {
    color: burlywood;
  }
  color: burlywood;
}
</style>
