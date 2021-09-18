<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in list" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            class="rounded-circle border border-light w-25 my-3"
            :src="column.avatar"
            :alt="column.title"
          />

          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.desciption }}</p>
          <a class="btn btn-outline-primary" href="#">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  desciption: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    props.list[0].id;
  },
});
</script>

<style scoped></style>
