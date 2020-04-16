<template>
    <div>
        <header>Root content</header>
        <router-link :to="{name: 'Landing'}">Landing</router-link>
        <router-link :to="{name: 'More'}">More</router-link>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>