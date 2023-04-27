<script>
// export default {
//   props: ['data']
// }
</script>
<script setup>
let props = defineProps({
  list: [],
  title: "",
  name: ""
});
</script>
<template>
  <section>
    <h1>{{ props.name }}</h1>
    <ul>
      <li v-for="m in props.list">{{ m.name }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  border: 1px solid gray;
  padding: 20px;
}
</style>