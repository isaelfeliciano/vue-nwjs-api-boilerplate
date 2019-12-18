<template>
  <div id="app">
    <component :is="layout">
      <router-view class="router-view-wrapper"></router-view>
    </component>
  </div>
</template>

<script>


const default_layout = "default";


export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  }
}

</script>
<style lang="scss">


.router-view-wrapper {
  padding-left: 50px;
}

</style>
