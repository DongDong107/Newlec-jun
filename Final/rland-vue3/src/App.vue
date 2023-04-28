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
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, shallowRef, triggerRef, watch } from 'vue';
import Header from './components/Header.vue'
import NewList from './components/NewMenus.vue'
import Modal from './components/Modal.vue'

// ref({}) 도 되긴 되지만, 객체를 twoway 해주는건 reactive()
let menu = reactive({
  id: 1,
  name: "아메리카노",
  price: 1500
});
let model = reactive({
  newList: [],
  list: []
});

let b = ref(30);

let total = computed(() => model.list.map((m) => m.price).reduce((p, c) => p + c, 0));
watch(model, () => {
  console.log("달라지나아");
});

let query = ref("");
let queryArr = reactive([]);
watch(query, () => {
  queryArr = model.list.filter(word => word.name.includes(query.value));
})
// map => reduce

// let total = computed(() => {
//   let result = 0;
//   for (let m of model.list)
//     result += m.price;

//   return result;
// })

let aa = shallowRef({ name: 'okay' });
aa.value.name = "good";

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
  model.newList = json.newList;

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

function menuDelHandler(id) {
  console.log(id);
  let idx = model.list.findIndex(m => m.id == id)
  model.list.splice(idx, 1);
}

function inputHandler() {
  console.log("test area");
  triggerRef(aa);
}

let showModal = ref(false);

function showHandler() {
  showModal.value = true;
}

function dlgOkHandler(a) {
  showModal.value = false;
  console.log(a);
}
</script>

<template>
  <Header />
  <div>
    <button @click="showHandler">show</button>
  </div>
  <Modal title="공지사항" :show="showModal" @ok="dlgOkHandler">
    <div>
      안녕하세요sdfdsfafdssfasf
    </div>
  </Modal>
  <div>
    <div>
      <label for="">검색</label>
      <input v-model="query">
    </div>
    <ul>
      <li v-for="m in queryArr">

        <span>{{ m.name }}</span><input type="button" value="del" @click="menuDelHandler(m.id)">
      </li>
    </ul>
  </div>
  <div>
    total price : <span>{{ total }}</span><br>
    {{ aa.name }}<input type="text" v-model="aa.name" @input="inputHandler">
  </div>
  <div>
    a:<span v-text="a"></span><input v-model.number="a" /><br>
    b:<span v-text="b"></span><input v-model.number="b" /><br>
    price:<span v-text="menu.price"></span><input v-model="menu.price" /><br>
    <button @click="clickHandler"> 버튼</button>
  </div>

  <NewList :list="model.newList" title="추천메뉴" :name="aa.name" />
</template>

<style></style>