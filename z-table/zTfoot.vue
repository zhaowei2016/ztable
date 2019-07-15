<template>
<tfoot>
    <slot></slot>
</tfoot>
</template>

<script>

export default {
    name: 'zTfoot',
    inject: {
        zTable: 'zTable'
    }
};
</script>
<style lang='less' scoped>

</style>