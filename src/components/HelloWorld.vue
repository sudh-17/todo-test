<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" v-bind:key="item.id">
        <slot v-bind:item="item">{{item.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
let list = [{
  id: '1',
  done: false,
  name: 'ff1'
},{
  id: '2',
  done: false,
  name: 'ff2'
}, {
  id: '3',
  done: false,
  name: 'ff3'
}, {
  id: '4',
  done: false,
  name: 'ff4'
}]
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      list
    }
  }
}
</script>
