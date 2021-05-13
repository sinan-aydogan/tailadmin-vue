<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center bg-blue-200 gap-10">
    <div class="flex flex-col justify-center items-center border rounded-lg p-10 gap-10 bg-white bg-opacity-30 shadow">
      <logo-icon class="w-20 h-20 text-gray-800 -mb-6" />
      <h1 class="font-bold text-7xl text-gray-800">Coming Soon</h1>
      <p class="font-semibold text-2xl text-gray-700">This page is under the construction</p>
    </div>
    <t-button color="green" link="/" radius="8">Return to Home Page</t-button>
  </div>
</template>

<script>
import TButton from "@/components/Button/Button";
import LogoIcon from "@/components/icon/Logo"
export default {
  name: "UnderConstruction",
  components : {TButton,LogoIcon}
}
</script>

<style scoped>

</style>