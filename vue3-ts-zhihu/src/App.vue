<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <!-- <ColumnList :list="list" /> -->
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script lang="ts">
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import { defineComponent } from "vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    desciption: "descption::::这是test1的专栏",
    avatar:
      "https://pic3.zhimg.com/v2-6760c94121035d99f1c3b0933e97a952_im.jpg?source=12a79843",
  },
  {
    id: 2,
    title: "test2的专栏",
    desciption: "descption::::这是test2的专栏",
    avatar:
      "https://pic3.zhimg.com/v2-6760c94121035d99f1c3b0933e97a952_im.jpg?source=12a79843",
  },
  {
    id: 3,
    title: "test3的专栏",
    desciption: "descption::::这是test3的专栏",
    avatar:
      "https://pic3.zhimg.com/v2-6760c94121035d99f1c3b0933e97a952_im.jpg?source=12a79843",
  },
  {
    id: 4,
    title: "test4的专栏",
    desciption: "descption::::这是test4的专栏",
    avatar:
      "https://pic3.zhimg.com/v2-6760c94121035d99f1c3b0933e97a952_im.jpg?source=12a79843",
  },
];

const currentUser: UserProps = {
  isLogin: true,
  name: 'dell'
};

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      list: testData,
      currentUser,
    };
  },
});
</script>

<style></style>
