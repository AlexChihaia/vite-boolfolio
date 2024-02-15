<script>
export default {
  name: "Header",
};
</script>
<template>
  <header class="bg-secondary">
    <div class="container d-flex justify-content-between py-3">
      <div>
        <a class="nav-link" href="">Boolfolio</a>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
a {
  font-size: 1.5rem;
}
</style>
