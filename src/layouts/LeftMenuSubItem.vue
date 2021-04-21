<template>
  <!-- Item Container-->
  <div v-show="showingLeftMenu">
    <div
      class="left-menu-sub-item"
    >
    <div class="flex items-center justify-start"><div class="w-2 h-10 bg-gray-200"></div>
      <!-- Label -->
      <div v-if="showingLeftMenu" class="py-2 pl-2">{{ item.label }}</div></div>
    
      <!-- Icon -->
      <div class="pr-2">
        <font-awesome-icon :icon="item.icon != '' ? item.icon : 'dot-circle'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "showingLeftMenu"],
};
</script>