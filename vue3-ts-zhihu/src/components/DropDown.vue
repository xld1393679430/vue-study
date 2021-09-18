<template>
  <div class="dropdown" @click.stop>
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ text }}</a
    >
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuLink"
      :style="{ display: isOpen ? 'block': 'none' }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "DropDown",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const hide = () => {
      isOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', hide)
    })

    onUnmounted(() => {
      document.removeEventListener('click', hide)
    })

    return {
      isOpen,
      toggleOpen,
    };
  },
});
</script>

<style scoped></style>
