<script>
export default {
  name: "AppHome",
};
</script>
<template>
<body>
  <div class="container">
  <div class="avatar"></div>
  <div class="overlay">
    <h1>Alex Chihaia</h1>
    <p>Sono un giovane appassionato di tecnologia e ho appena completato il corso di Full Stack Web Development di Boolean.</p>
    <p>Durante questi sei mesi ho appreso l'utilizzo di tecnologie come : HTML, CSS e SCSS, Javascript , Bootstrap, Node.js, Vue.js, Vite, PHP, Laravel, MySQL.</p>
    <p>Questo è uno dei tanti progetti sviluppati lungo questo percorso e qui potete trovare una lista con dettagli riguardanti maggiorparte di essi.</p>
  </div>
</div>
</body>
</template>
<style lang="scss" scoped>
 body{
  display: flex;
  min-height: 722px;
  align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #1f1f1f;
      color: #fff;
    }
    .container {
      flex-grow: 1;
      max-width: 800px;
      padding: 50px;
      background-color: #333;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      text-align: center;
      position: relative;
      overflow: hidden;
      
    }
    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 20px auto;
      background-color: #ff5e00;
      background-image: url('avatar.jpg'); /* Sostituisci 'avatar.jpg' con il tuo URL dell'immagine */
      background-size: cover;
      background-position: center;
      border: 5px solid #fff;
      box-shadow: 0 0 20px rgba(255, 94, 0, 0.5);
    }
    h1 {
      color: #ff5e00;
      font-size: 36px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    p {
      color: #ccc;
      font-size: 18px;
      line-height: 1.6;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .container:hover .overlay {
      opacity: 1;
    }
</style>
