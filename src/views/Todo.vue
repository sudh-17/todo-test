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
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          @click="onCheckAll"
          :checked="isAllChecked"
        />
        <label for="toggle-all">Mark all as complete</label>
      </template>
      <List :list="todos" @onDel="delItem" @onCheck="onCheck" />
    </section>

    <footer v-if="list.length > 0" class="footer">
      <span class="todo-count">
        <strong>{{ itemLeft }}</strong>
        {{ itemLeft > 1 ? 'items left': 'item left' }}
      </span>
      <ul class="filters">
        <li>
          <a href="#/" :class="{selected: filter === 'all'}" @click="onFilt('all')">All</a>
        </li>
        <li>
          <a
            href="#/active"
            :class="{selected: filter === 'active'}"
            @click="onFilt('active')"
          >Active</a>
        </li>
        <li>
          <a
            href="#/completed"
            :class="{selected: filter === 'completed'}"
            @click="onFilt('completed')"
          >Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
  </section>
</template>

<script>
import "./base.css";
import "./common.css";
import List from "../components/List.vue";
import { mapState } from "vuex";

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
    },
    onCheck(id) {
      let index = this.list.findIndex(item => item.id === id);
      this.list[index].completed = !this.list[index].completed;
      this.list = JSON.parse(JSON.stringify(this.list));
    },
    onCheckAll(e) {
      let value = e.target.checked;
      this.list.forEach(item => {
        item.completed = value;
      });
      this.list = JSON.parse(JSON.stringify(this.list));
    },
    clearCompleted() {
      this.list = this.list.filter(item => item.completed === false);
    },
    onFilt(value) {
      if (value === "completed") {
        this.$store.commit("SET_FILTER_TYPE", "completed");
      } else if (value === "active") {
        this.$store.commit("SET_FILTER_TYPE", "active");
      } else {
        this.$store.commit("SET_FILTER_TYPE", "all");
      }
    }
  },
  computed: {
    ...mapState({
      filter: state => state.app.filter
    }),
    todos() {
      if (this.filter === "active") {
        return JSON.parse(
          JSON.stringify(this.list.filter(item => item.completed === false))
        );
      } else if (this.filter === "completed") {
        return JSON.parse(
          JSON.stringify(this.list.filter(item => item.completed === true))
        );
      } else {
        return JSON.parse(JSON.stringify(this.list));
      }
    },
    itemLeft() {
      let count = 0;
      this.list.forEach(item => {
        if (!item.completed) {
          count++;
        }
      });
      return count;
    },
    isAllChecked() {
      return this.list.findIndex(item => item.completed === false) === -1;
    }
  }
};
</script>

<style lang="less">
</style>

