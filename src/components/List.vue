<template>
  <div>
    <!-- <ul>
            <li v-for="item in list" :key="item.id" >
                <slot name="id" v-bind:id="item.id">{{item.id}}</slot>
                <slot name="title" v-bind:title="item.name">{{item.name}}</slot>
            </li>
    </ul>-->
    <ul class="todo-list">
      <li v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @click="onCheck(item.id)" />
          <label>{{ item.title}}</label>
          <button class="destroy" @click="onDel(item.id)"></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    list: Array
  },
  methods: {
    onDel(id) {
      this.$emit("onDel", id);
    },
    onCheck(id) {
      this.$emit("onCheck", id);
    }
  }
};
</script>

<style lang="less" scoped>
.view {
  text-align: left !important;
  input[type="checkbox"]:checked + label {
    color: #d9d9d9;
    text-decoration: line-through !important;
  }
}
</style>


