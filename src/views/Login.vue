<template>
  <div class="login">
    <div class="sub-item">
      <div class="label">用户名</div>
      <input v-model="username" />
    </div>

    <div class="sub-item">
      <div class="label">密码</div>
      <input v-model="password" type="password" />
    </div>
    <div>
      <Button @click="login">登录</Button>
      <Button @click="regis">注册</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Login",
  components: { Button },
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.$store.commit("set", true);
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      if (res.redirected) {
        this.$router.push(res.url);
      }

      if (res.status == 200) this.$store.commit("set", this.username);
      else {
        const json = await res.json();
        alert(json["msg"]);
      }
    },
    regis() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
input {
  outline: 3px solid #32b97b;
  border-radius: 3px;

  text-align: center;
  font-size: 1.6em;
}
.login {
  outline: 3px solid #32b97b;
  border-radius: 3px;
  background-color: #87deb6;
  color: #fcfcfd;
  font-weight: bold;

  padding: 30px;
}
.sub-item {
  font-size: 1.6em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
}
.label {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
