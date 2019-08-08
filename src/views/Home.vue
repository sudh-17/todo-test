<template>
  <div class="hello">
    <List
        :list="list"
        @del="del"
        >
      <template v-slot:id="slotProps">
        <a class="id" href="javascript:;">{{slotProps.id}}</a>
      </template>
      <template v-slot:title="slotProps">
        <a class="text" href="javascript:;">{{slotProps.title}}</a>
      </template>
    </List>
  </div>
</template>

<script>
import List from "../components/List";
let list = [
  {
    id: "1",
    done: false,
    name: "ff1"
  },
  {
    id: "2",
    done: false,
    name: "ff2"
  },
  {
    id: "3",
    done: false,
    name: "ff3"
  },
  {
    id: "4",
    done: false,
    name: "ff4"
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
    del (id) {
        console.log(id)
        for (let i =0; i< list.length; i++) {
            if (list[i].id === id) {
                list.splice(i, 1)
            }
        }
    }
  }
};
</script>

<style scoped>
.id {
    color: rgb(0, 255, 157);
}
.text {
    color: brown;
    margin: 5px 20px;
}
</style>
