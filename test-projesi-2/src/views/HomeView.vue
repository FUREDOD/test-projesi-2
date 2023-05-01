<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/DefineX.jpeg" />
    <HelloWorld msg="test proje" />
    <HomeView />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "./AboutView.vue";
import HomeView from "./HomeView.vue";
import login from "./login.vue";
import UserRegistration from "./UserRegistration.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    AboutView,
    HomeView,
    login,
    UserRegistration
  },
};
</script>
