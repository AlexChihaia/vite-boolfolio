<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div class="card">
    <img
      :src="project.thumb"
      class="card-img-top card-img"
      alt="Project Image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        <strong>Project category:</strong> {{ project.category }}
      </p>
      <p class="card-text">
        <strong>Project status:</strong> {{ project.status }}
      </p>
      <p class="card-text">
        <strong>Project type:</strong> {{ project.type.title }}
      </p>
      <p class="card-text">
        <strong>Project technologies:</strong>
        <span v-for="technology in project.technologies" class="technology">{{
          technology.title
        }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 18rem;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.card-img {
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  height: 200px;
}

.card-title {
  color: #ff5e00;
  font-weight: bold;
  transition: color 0.3s ease;
}

.card:hover .card-title {
  color: #ffcc00;
}

.card-text strong {
  color: #ccc;
}

.card-text .technology {
  background-color: #ff5e00;
  color: #fff;
  border-radius: 5px;
  margin-right: 5px;
  padding: 2px 5px;
}

.more-btn {
  background-color: #ff5e00;
  border-color: #ff5e00;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.more-btn:hover {
  background-color: #ffcc00;
  border-color: #ffcc00;
}
</style>
