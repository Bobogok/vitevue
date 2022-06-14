<template>
  <!-- дочерний компонент может сгенерировать событие с помощью встроенного метода $emit -->
  <div class="button" @click="randomHexColor">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: ['title'],
  methods: {
    randomHexColor() {
      console.log(this.$parent.bar())
      this.$emit('some-shit', Math.floor(Math.random() * 16777215).toString(16))
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  width: 200px;
  height: 20px;
  background-color: red;
}
</style>
