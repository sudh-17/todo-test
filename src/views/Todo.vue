<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus="">
        </header>
        <section class="main" style="display: block;">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li data-id="1546478446428" class="completed">
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>f</label>
                        <button class="destroy"></button></div>
                </li>
                <li data-id="1546478447470" class="completed">
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>dw</label>
                        <button class="destroy"></button>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="footer" style="display: block;">
            <span class="todo-count"><strong>2</strong> items left</span>
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
import './base.css'
import './common.css'
export default {
    
}
</script>

<style lang="less">
</style>

