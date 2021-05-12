<template>
  <div class="inline-flex flex-row-reverse ml-4">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AvatarGroup",
  created() {
    console.log(this.$slots.default[0])
  }
}
</script>

<style scoped>

</style>