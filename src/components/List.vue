<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id" >
                <slot name="id" v-bind:id="item.id">{{item.id}}</slot>
                <slot @click="del('1111')" name="title" v-bind:title="item.name">{{item.name}}</slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:  'list',
    props: {
        list: Array
    },
    methods: {
        del (id) {
            console.log('id', id)
            this.$emit('del', id)
        }
    }
}
</script>

