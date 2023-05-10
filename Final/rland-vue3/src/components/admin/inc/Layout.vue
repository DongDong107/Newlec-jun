<script setup>
import Header from '../../inc/Header.vue';
import Footer from '../../inc/Footer.vue';
import Aside from './Aside.vue';

</script>

<template>
  <Header />
  <Aside />

  <Transition name="fade">
    <router-view></router-view>
  </Transition>
  <!-- 
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view> -->

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>