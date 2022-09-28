<script setup>
  // Group objesinden gelen her bir person <Person/> componentine gönderiliyor.
  // Grup isimleri birer renk ismi olduğu için 'color' değişkeni oluşturdum
  // Ben burada her bir grubu ve asistanı kendi rengine göre renklendirmek istedim.

  import Person from "./Person.vue";
  
  const props = defineProps(["group"])
  const color = props.group.name || "rebeccapurple"
</script>

<template>
  <div class="group">
    <div class="group__name">
      <h2 >{{props.group.name}}</h2>
    </div>
    <div class="group__persons">
      <Person v-for="person in props.group.persons" :key="person.id" :color="color" :person="person"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .group{
    display: flex;
    align-items: center;
    min-height: 400px;
    max-height: 400px;
    min-width: 310px;
    margin-bottom: 15px;
    border: 1px solid v-bind('color');

    &__name{
      height: 100%;
      writing-mode: vertical-lr;
      text-align: center;
      user-select: none;
      background-color: v-bind('color')
    }

    &__persons{
      height: 100%;
      padding-left: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }
  }
</style>