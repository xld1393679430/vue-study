<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        v-model="username"
        type="text"
        placeholder="请输入用户名"
        class="wrapper__input__content"
      />
    </div>
    <div class="wrapper__input">
      <input
        v-model="password"
        type="text"
        placeholder="请输入密码"
        class="wrapper__input__content"
      />
    </div>

    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegister">注册</div>

    <Toast v-show="show" :message="message" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { toastConfigure } from "../../components/Toast.vue";

const useToastEffect = () => {
  const { show, message, toggleToast } = toastConfigure();
  return {
    show,
    message,
    toggleToast,
  };
};

const useLoginEffect = (toggleToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });
  const handleLogin = async () => {
    try {
      if (!data.username || !data.password) {
        toggleToast("请输入用户信息");
        return
      }
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        toggleToast("登陆成功");
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        toggleToast("接口登陆失败");
      }
    } catch (error) {
      toggleToast("接口请求失败");
    }
  };

  const { username, password } = toRefs(data);
  return {
    username,
    password,
    handleLogin,
  };
};

const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push({ name: "Register" });
  };

  return {
    handleRegister,
  };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { show, message, toggleToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(toggleToast);
    const { handleRegister } = useRegisterEffect();

    return {
      username,
      password,
      show,
      message,
      toggleToast,
      handleLogin,
      handleRegister,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    box-sizing: border-box;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem;
    padding: 0 0.16rem;
    background-color: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      font-size: 0.16rem;
      &::placeholder {
        color: $content-notice-color;
      }
    }
  }

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
