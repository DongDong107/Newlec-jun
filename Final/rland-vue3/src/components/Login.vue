<script setup>
import { reactive } from 'vue';
import userDetails from '../store/UserDetails.js';

let user = reactive({
  username: "newlec",
  password: "111",
  role: ""
})

async function loginHandler() {
  console.log(user.username);
  let response = await fetch("http://localhost:8080/members/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: `userName=${user.username}&password=${user.password}`
  });

  let json = await response.json();
  console.log(json.result.userName);

  userDetails.username = json.result.userName;
  userDetails.password = json.result.pwd;
  userDetails.email = json.result.email;

  console.log(userDetails);
}

</script>

<template>
  <main>
    <div class="sign-in">
      <div class="sign-in-logo">
        <img src="/image/logo-black.svg" alt="Rland" />
      </div>
      <form class="sign-in-form">
        <div class="sign-in-form-input">
          <div>
            <input type="text" v-model="user.username" class="input-bottom-line" placeholder="아이디" required />
          </div>
          <div>
            <input type="password" v-model="user.password" class="input-bottom-line" placeholder="비밀번호" required />
          </div>
        </div>

        <div class="sign-in-form-button">
          <div class="wd-100">
            <input type="submit" value="로그인" class="btn btn-default" @click.prevent="loginHandler" />
          </div>
          <div class="font-14">또는</div>
          <div class="wd-100">
            <a href="" class="deco icon-logo-google btn btn-outline">구글로 로그인</a>
          </div>
        </div>
      </form>
      <div class="sign-in-find-user font-14">
        <a href="./sign-up.html">회원가입</a> |
        <a href="">비밀번호 찾기</a>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url("/css/sign-in.css");
/* main {
  background-color: var(--bg-);
} */
</style>