<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="home">
      <img alt="Vue logo" src="../assets/DefineX.jpeg" />
      <HelloWorld msg="test proje" />
      <AboutView />
      <HomeView />
      <login />
      <UserRegistration />
      <AsyncUserDashboard />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "./AboutView.vue";
import HomeView from "./HomeView.vue";
import login from "./login.vue";
import UserRegistration from "./UserRegistration.vue";
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const AsyncUserDashboard = defineAsyncComponent(() =>
  import("./router/UserDashboard.vue")
);

export default {
  name: "App",
  components: {
    HelloWorld,
    AboutView,
    HomeView,
    login,
    UserRegistration,
    AsyncUserDashboard,
  },
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    const route = useRoute();
    const router = useRouter();

    if (
      route.matched.some((record) => record.meta.requiresAuth) &&
      !isAuthenticated.value
    ) {
      router.push("/login");
    }

    return {
      isAuthenticated,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.home {
  margin-top: 30px;
}
</style>
