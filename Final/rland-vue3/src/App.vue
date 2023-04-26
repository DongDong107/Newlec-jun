<script>
// import Header from "./components/Header.vue";
export default {
  // components: {
  //   Header
  // },
  data() {
    return {
      a: 10
    };
  },
  // computed: {
  //   total() {
  //     return this.a + 2;
  //   }
  // }
  // , mounted() { },
  // methods: {
  //   clickHandler() {
  //     console.log("click");
  //   }
  // }

}
</script>
<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import Header from './components/Header.vue'

// ref({}) 도 되긴 되지만, 객체를 twoway 해주는건 reactive()
let menu = reactive({
  id: 1,
  name: "아메리카노",
  price: 1500
});

let b = ref(30);

let total = computed(() => model.list.map((m) => m.price).reduce((p, c) => p + c, 0));
// map => reduce

// let total = computed(() => {
//   let result = 0;
//   for (let m of model.list)
//     result += m.price;

//   return result;
// })

let model = reactive({
  newList: [],
  list: []
});

// ==========================================
onMounted(() => {
  console.log(`b=${b.value}`);
  console.log(`price=${menu.price}`);
  load();
})

onBeforeMount(() => {
  console.log("beforemounted");
})

// ======= EVNET HANDLER ===========================
async function load() {
  let response = await fetch("http://192.168.0.33:8080/menus");
  let json = await response.json();
  model.list = json.list;

  // console.log(list);

  // fetch("http://192.168.0.33:8080/menus")
  // .then(res=>res.json())
  // .then(json=>json.list)
  // .then(a=>{
  //   list=a;
  // });
}

function clickHandler() {
  console.log("clicked haha");
  load();
}



</script>

<template>
  <Header />

  <div>
    <ul>
      <li v-for="m in model.list">
        <span>{{ m.name }}</span>
      </li>
    </ul>
  </div>
  <div>
    total price : <span>{{ total }}</span>
  </div>
  <div>
    a:<span v-text="a"></span><input v-model.number="a" /><br>
    b:<span v-text="b"></span><input v-model.number="b" /><br>
    price:<span v-text="menu.price"></span><input v-model="menu.price" /><br>
    <button @click="clickHandler"> 버튼</button>
  </div>
</template>

<style></style>