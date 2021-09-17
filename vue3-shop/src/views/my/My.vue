<template>
  <div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegister">注册</div>
    <Docker :current="3" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Docker from "../home/Docker.vue";
export default {
  name: "My",
  components: { Docker },
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      router.push({ name: "Login" });
    };

    const handleRegister = () => {
      router.push({ name: "Register" });
    };

    return {
      handleLogin,
      handleRegister,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  &__login-button {
    background-color: #0091ff;
    box-sizing: 0 0.04rem 0.08rem rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    margin: 0.32rem 0.4rem 0.16rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    color: #fff;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-color;
  }
}
</style>
