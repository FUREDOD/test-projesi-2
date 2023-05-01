<template>
  <div class="login">
    <h3>Giriş yap</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Şifre" v-model="password" />
    <button @click="login">Connection</button>
  </div>
  <div class="register">
    <h3>sign Up</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Şifre" v-model="password" />
    <button @click="register">Connection</button>
    <p>
      <router-link :to="{ name: 'login' }">login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {},
    register() {},
  },
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
}
button {
  margin-top: 20px;
  width: 15%;
  cursor: pointer;
  padding: 10px;
}
p {
  margin-top: 40px;
  font-size: 14px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
