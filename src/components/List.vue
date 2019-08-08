<template>
  <div>
    <!-- <ul>
            <li v-for="item in list" :key="item.id" >
                <slot name="id" v-bind:id="item.id">{{item.id}}</slot>
                <slot name="title" v-bind:title="item.name">{{item.name}}</slot>
            </li>
    </ul>-->
    <ul class="todo-list">
      <li v-for="item in list" :key="item.id" data-id="1546478446428" class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
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
    onDel (id) {
      this.$emit("onDel", id);
    }
  }
};
</script>

