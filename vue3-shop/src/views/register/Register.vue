<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        type="text"
        placeholder="请输入用户名"
        class="wrapper__input__content"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        placeholder="请输入密码"
        class="wrapper__input__content"
        autocomplete="new-password"
        v-model="password"
      />
    </div>

    <div class="wrapper__input">
      <input
        type="password"
        placeholder="确认密码"
        class="wrapper__input__content"
        autocomplete="new-password"
        v-model="confirmPassword"
      />
    </div>

    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLogin">
       已有账号去登陆
    </div> 

     <Toast v-if="show" :message="message" />
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

const useRegisterEffect = (toggleToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "", confirmPassword: "" });
  const handleRegister = async () => {
    try {
      if (!data.username || !data.password || !data.confirmPassword) {
        toggleToast("请输入用户信息");
        return;
      }
      console.log(data, 'data');
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        toggleToast("注册成功");
        router.push({ name: "Login" });
      } else {
        toggleToast("注册失败");
      }
    } catch (error) {
      toggleToast("接口请求失败");
    }
  };

  const { username, password, confirmPassword } = toRefs(data);
  return {
    username,
    password,
    confirmPassword,
    handleRegister,
  };
};

const useLoginEffect = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push({ name: "Login" });
  };

  return {
    handleLogin,
  };
};

export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { show, message, toggleToast } = useToastEffect();

    const {
      username,
      password,
      confirmPassword,
      handleRegister,
    } = useRegisterEffect(toggleToast);

    const { handleLogin } = useLoginEffect();

    return {
      show,
      message,
      toggleToast,
      username,
      password,
      confirmPassword,
      handleRegister,
      handleLogin,
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

  &__register-button {
    background-color: #0091ff;
    box-sizing: 0 0.04rem 0.08rem rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    margin: 0.32rem 0.4rem 0.16rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    color: $bgColor;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-color;
  }
}
</style>
