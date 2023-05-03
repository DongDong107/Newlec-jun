<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Aside from './Aside.vue';

</script>

<template>
  <Header />
  <Aside />

  <router-view></router-view>

  <Footer />
  <!-- 메인페이지 가운데 빗금 문양 -->
  <div class="slash-background">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
body {
  background-color: var(--color-bg-2);
}
</style>