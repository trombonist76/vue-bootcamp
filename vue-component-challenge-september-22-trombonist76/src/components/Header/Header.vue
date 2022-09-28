<script setup>
  import BootcampLogo from "@/assets/svg/BootcampLogo.vue";
  const props = defineProps(["title"])
</script>

<template>
  <div class="header">
    <h1 class="header__title">{{props.title}}</h1>
    <BootcampLogo/>
  </div>
</template>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    &__title{
      font-size: 36px;
    }
  }
</style>