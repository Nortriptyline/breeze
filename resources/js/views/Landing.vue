<template>
    <h1>Landing page</h1>
</template>
<script>
export default {
    name: "Landing",
    created: function() {
        this.$store.dispatch("samples/index");
    }
};
</script>

<style lang="scss" scoped>

</style>