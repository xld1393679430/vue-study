<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export const toastConfigure = () => {
  const toastData = reactive({
    show: false,
    message: "",
  });

  const toggleToast = (message, delay = 2000) => {
    toastData.show = true;
    toastData.message = message;
    setTimeout(() => {
      toastData.show = false;
      toastData.message = "";
    }, delay);
  };

  const { show, message } = toRefs(toastData)

  return {
    show, 
    message,
    toggleToast,
  };
};

export default {
  name: "Toast",
  props: ["message"],
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  padding: 0.1rem;
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>
