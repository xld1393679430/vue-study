<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :text="`你好，${user.name}`">
          <DropdownItem>
            <a class="dropdown-item" href="#">新建文章</a>
          </DropdownItem>
          <DropdownItem :disabled="true">
            <a class="dropdown-item" href="#">编辑资料</a>
          </DropdownItem>
        </DropDown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import DropDown from "./DropDown.vue";
import DropdownItem from "./DropdownItem.vue";
import { defineComponent, PropType } from "vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    DropDown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
