<template>
  <div class="Register">
    <h1>sing up</h1>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Şifre" />
    <button @click="signUp">sign Up</button>
    <p>girişe geri dön</p>
  </div>
</template>

<script>
export default {
  name: "UserRegistration",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {},
  },
};
</script>

<style scoped>
.Register {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 10px 0;
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
