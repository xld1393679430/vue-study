<template>
  <div class="wrapper">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
      <div class="wrapper__input">
          <input type="text" placeholder="请输入用户名" class="wrapper__input__content">
      </div>
      <div class="wrapper__input">
          <input type="text" placeholder="请输入密码" class="wrapper__input__content">
      </div>

       <div class="wrapper__input">
          <input type="text" placeholder="确认密码" class="wrapper__input__content">
      </div>

      <div class="wrapper__register-button">注册</div>
      <div class="wrapper__register-link" @click="handleToLogin">已有账号去登陆</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: "Register",
    setup () {
        const router = useRouter()
        const handleToLogin = () => {
            router.push({name: 'Login'})
        }

        return {
            handleToLogin
        }
    }
}
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
        margin: 0 auto .4rem;
        width: .66rem;
        height: .66rem;
    }
    &__input {
        box-sizing: border-box;
        height: .48rem;
        margin: 0 .4rem .16rem;
        padding: 0 .16rem;
        background-color: #f9f9f9;
        border: .01rem solid rgba(0, 0, 0, .1);
        border-radius: .06rem;
        &__content {
            line-height: .48rem;
            border: none;
            outline: none;
            background: none;
            width: 100%;
            font-size: .16rem;
            &::placeholder {
                color: $content-notice-color;
            }
        }
    }

    &__register-button {
        background-color: #0091ff;
        box-sizing: 0 .04rem .08rem rgba(0, 145, 255, .32);
        border-radius: .04rem;
        margin: .32rem .4rem .16rem;
        line-height: .48rem;
        font-size: .16rem;
        color: #fff;
        text-align: center;
    }
    &__register-link {
        text-align: center;
        font-size: .14rem;
        color: $content-notice-color
    }
}
</style>