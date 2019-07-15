<template>
  <thead  class="z-thead">
    <slot></slot>
  </thead>
</template>

<script>
export default {
    name: 'zThead',
};
</script>
<style>
.z-thead th {
  background-color: #fff;
  line-height: 32px;
  color: #333;
    	vertical-align: middle;

}
</style>

