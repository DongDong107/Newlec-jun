import { defineStore } from "pinia";

export const useUserDetailsStore = defineStore("userDetails",{
  state:()=>({
    id:0,
    username:null,
    pwd:null,
    email:null,
    role:null
  }),
  getters:{
    isAuthenticated:(state)=>state.username==null?false:true
  },
  actions:{
    logout(){
      this.id = 0;
      this.username = null;
      this.email = null;
    }
  }
});