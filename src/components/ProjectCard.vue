<script>
export default {
  props: ["project"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
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
        {{ project.type.title }}
      </p>
      <p class="card-text">
        <strong>Project technologies:</strong>
        <span class="px-2" v-for="technology in project.technologies">
          {{ technology.title }}
        </span>
      </p>
      <a href="#" class="btn btn-warning">More</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
