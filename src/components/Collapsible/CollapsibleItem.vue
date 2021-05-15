<template>
  <div class="flex flex-col flex-wrap w-full border border-gray-400 rounded-md overflow-hidden shadow-sm">
    <div
        :class="['flex w-full justify-between items-center p-4 bg-gray-200 font-bold cursor-pointer', showPanel && 'border-b border-gray-400']"
        @click="showPanel = !showPanel">
      <slot name="title"></slot>
      <div class="text-gray-700">
        <font-awesome-icon icon="angle-down" size="lg"/>
      </div>
    </div>
    <div v-if="showPanel" class="p-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapsibleItem",
  data(){
    return {
      showPanel : false
    }
  }
}
</script>

<style scoped>

</style>