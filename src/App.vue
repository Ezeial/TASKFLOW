<script setup lang="ts"></script>

<template>
    <div class="navbar">
        <RouterLink to="/home">HOME</RouterLink>
        <RouterLink to="/board">BOARD</RouterLink>
    </div>
    <RouterView />
</template>

<style>
    #app {
        min-height: 100%;
        background: linear-gradient(45deg, purple, rgb(104, 104, 104));
    }
    
    .navbar {
        display: flex;
        justify-content: center;
    }

    a {
        font-size: x-large;
        margin: 5px;
    }

    html {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    body {
        flex-grow: 1;
        min-height: 100vh; /* Fallback for older browsers */
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        box-sizing: border-box;
    }
</style>
