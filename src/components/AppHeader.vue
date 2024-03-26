<script>
export default {
  name: "Header",
};
</script>
<template>
  <header class="bg-success">

<nav class="navbar navbar-expand-lg">
  <div class="pic-container">
    <router-link :to="{ name: 'home' }" class="text-decoration-none">
              <img src="/src/assets/img/portfolio-logo-25fda0b7.png" alt="logo" /></router-link>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">
          <span class="nav-link">Home</span>
        </router-link></li>
      <li class="nav-item"><router-link :to="{ name: 'projects' }" class="nav-link">
          <span class="nav-link">Projects</span>
        </router-link></li>
      <li class="nav-item"><router-link :to="{ name: 'about' }" class="nav-link">
          <span class="nav-link">About</span>
        </router-link></li>
    </ul>
  </div>
</nav>
  </header>
</template>
<style lang="scss" scoped>
header{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #1f1f1f;
      color: #fff;
}

.pic-container{
  width: 70px;
  img{
    width: 100%;
  }
}
.navbar {
  background-color: #333;
  padding: 20px 0;
}

.navbar-brand {
  margin-right: 50px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.navbar-brand:hover {
  color: #ff5e00;
}

.navbar-nav {
  margin-left: auto;
}

.nav-item {
  margin-left: 20px;
}

.nav-link {
  color: #fff;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff5e00;
}
</style>
