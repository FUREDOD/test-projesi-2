<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/DefineX.jpeg" />
    <HelloWorld msg="test proje" />
    <HomeView />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// eslint-disable-next-line no-unused-vars
import HomeView from "./HomeView.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
