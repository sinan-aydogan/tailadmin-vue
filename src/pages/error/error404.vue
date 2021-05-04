<template>
  <div class="flex flex-col justify-center items-center h-screen gap-4">
    <span class="text-7xl font-extrabold font-mono">404</span>
    <img alt="" class="h-1/2" src="@/assets/img/error404.jpg">
    <Button color="yellow" link="/">Go Home</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "404",
  components : {
    Button
  },
  data () {
    return {
      publicPath: process.env.BASE_URL+'img/error404.jpg'
    }
  }
}
</script>

<style scoped>

</style>