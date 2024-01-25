<script setup>
  const nome = "Karen Aprigio Moraes"
  const Obj = {
    nome: "Isabella",
    filme: "Elementos"
  }

  function dizOla() {
    return `${nome} diz Olá`
  }

  const imagem = "https://cdn.pixabay.com/photo/2022/09/02/12/32/orixa-7427496_1280.jpg"
  const imagem2 = "https://cdn.pixabay.com/photo/2017/04/12/07/46/tea-lights-2223898_1280.jpg"
  const imagem3 = "https://cdn.pixabay.com/photo/2021/02/03/15/21/shaman-5978302_1280.png"
  
  const botao = false
  const gosto = false
  const naogosto = false
</script>

<template>
  <h1>{{dizOla("Helena")}}</h1>
  <img v-bind:src="imagem">
  <img v-if="gosto" :src="imagem2"> <!--(v-if): impossibilita a visualização do cód no DOM-->
  <img v-else-if="naogosto" :src="imagem3">
  <h2 v-else>Não curte</h2>

  <button :disabled="!botao">enviar mensagem</button>
</template>

<style scoped>
  img {
    display: block;
    margin-top: 20px;
    width: 40%;
  }

  button {
    padding: 16px;
    margin-top: 20px;
    color: black;
    font-weight: bold;
  }
</style>
