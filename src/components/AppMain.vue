<script>
export default {
  name: "Main",
  props: ["projects", "types", "technologies"],
};
</script>
<template>
  <main>
    <div class="container">
      <div class="row my-4">
        <div class="col g-2" v-for="project in projects">
          <div class="card" style="width: 18rem">
            <img :src="project.thumb" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">
                <strong>Project category:</strong> {{ project.category }}
              </p>
              <p class="card-text">
                <strong>Project status:</strong> {{ project.status }}
              </p>
              <p class="card-text">
                <strong>Project type:</strong>
                {{ technologies.title }}
              </p>
              <p class="card-text">
                <strong>Project category:</strong> {{ project.category }}
              </p>
              <a href="#" class="btn btn-warning">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
