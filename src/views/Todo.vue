<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        @keyup.enter="addItem"
        class="new-todo"
        placeholder="What needs to be completed?"
        autofocus
      />
    </header>

    <section class="main" style="display: block;">
      <template v-if="list.length > 0">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
      </template>
      <List :list="list" @onDel="delItem" />
    </section>

    <footer v-if="list.length > 0" class="footer" style="display: block;">
      <span class="todo-count">
        <strong>2</strong> items left
      </span>
      <ul class="filters">
        <li>
          <a href="#/" class="selected">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" style="display: block;">Clear completed</button>
    </footer>
  </section>
</template>

<script>
import "./base.css";
import "./common.css";
import List from "../components/List.vue";

let list = [
  {
    id: "1",
    completed: false,
    title: "ff1"
  },
  {
    id: "2",
    completed: false,
    title: "ff2"
  },
  {
    id: "3",
    completed: false,
    title: "ff3"
  },
  {
    id: "4",
    completed: false,
    title: "ff4"
  }
];
export default {
  name: "home",
  data() {
    return {
      list
    };
  },
  components: {
    List
  },
  methods: {
    addItem(e) {
      let val = e.target.value;
      if (!val || val.trim() === "") {
        return;
      }
      this.list.push({
        id: new Date().getTime().toString(),
        title: val,
        completed: false
      });
      e.target.value = "";
    },
    delItem(id) {
      let index = this.list.findIndex(item => item.id === id);
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="less">
</style>

