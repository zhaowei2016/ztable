<template>
  <tr class="z-tr">
    <slot></slot>
  </tr>
</template>

<script>
export default {
    name: 'zTr',
    inject: {
        zTable: 'zTable',
    },
    provide() {
        return {
            zTr: this
        };
    },
    props: {
        index: ''
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    beforeDestroy() {
    },
    updated() {
    },
    computed: {

    },
    methods: {}
};
</script>
<style>

</style>
