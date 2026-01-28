<script setup lang="ts">
    import { computed } from 'vue'
    import { useTaskStore } from '@/stores/tasks'

    const {
        tasks,
        todoTasks,
        inProgressTasks,
        doneTasks,
        moveTask,
    } = useTaskStore()
</script>

<template>
    <div class="board">
        <div class="cards">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
        </div>
    </div>
</template>

<style scoped>
    .board {
        display: flex;
        background-color: black;
    }

    h1 {
        text-align: center;
        color: aliceblue;
    }
</style>