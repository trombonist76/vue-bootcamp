<script setup>
  // Asistana ve öğrenciye göre değişen bir 'typeClass' adında variable tanımladım.
  // Bu ''.asistan' ve '.student' class ismiyle stillendirme yapmamı sağlıyor

  const props = defineProps(["person","color"])
  const typeClass = {
    "assistant" : props.person.type,
    "student" : !props.person.type
  }

  // Grup rengini person objesi üzerinden de aşağıdaki gibi alabilirdim. Props'u tercih ettim.
  // const color = props.person.group || "rebeccapurple"
</script>

<template>
  <span :class="typeClass" class="person">{{props.person.name}}</span>
</template>

<style lang="scss" scoped>
  .person{
    font-size: 13px;
    font-weight: 400;
    padding: 1px 10px;
  }

  .student{
    background-size: 200% 100%;
    background-image: linear-gradient(to right, black 50%, v-bind("props.color") 50%);
    transition: background-position .3s;

    &:hover { 
      background-position: -100% 0;
    }
  }
  .assistant{
    font-style: italic;
    font-weight: 600;
    background-color: v-bind("props.color");
  }
</style>