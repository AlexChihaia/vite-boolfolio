<script>

export default {
  name: "Footer",
};
</script>
<template>
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p>&copy; 2024 Alex Chihaia. Tutti i diritti riservati.</p>
      </div>
      <div class="col-md-6">
        <div class="social-icons">
          <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
          <a href="#"><i class="fas fa-twitter"></i></a>
          <a href="#"><i class="fas fa-instagram"></i></a>
          <a href="#"><i class="fas fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.footer {
      background-color: #333;
      color: #fff;
      padding: 40px 0;
      text-align: center;
    }
    .footer p {
      margin-bottom: 20px;
    }
    .footer .social-icons {
      margin-top: 20px;
    }
    .footer .social-icons a {
      display: inline-block;
      margin: 0 10px;
      color: #fff;
      font-size: 24px;
      transition: transform 0.3s ease;
    }
    .footer .social-icons a:hover {
      transform: translateY(-5px);
    }
</style>
