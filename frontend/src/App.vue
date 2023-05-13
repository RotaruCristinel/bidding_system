<template>
    <div id="app">
        <header>
            <h1>My App</h1>
            <div>
                <button v-if="!loggedIn" @click="login">Login</button>
                <button v-if="loggedIn" @click="logout">Logout</button>
            </div>
        </header>
        <div class="main-content">
            <sidebar-component/>
            <router-view/>
        </div>
    </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue'

export default {
    components: {
        SidebarComponent,
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        login() {
            // Implement login logic here
        },
        logout() {
            // Implement logout logic here
        }
    }
}
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
}

.main-content {
    margin-left: 220px;
    display: flex;
    flex-grow: 1;
    overflow: auto;
    gap: 20px;
}
</style>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}
</style>

