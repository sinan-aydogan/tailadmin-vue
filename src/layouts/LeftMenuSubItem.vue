<template>
  <!-- Item Container-->
  <div v-show="showingLeftMenu">
    <div
      class="left-menu-sub-item"
    >
    <router-link
        :to="item.link"
        class="flex items-center justify-start"
        tag="div">
      <!-- Label -->
      <div v-if="showingLeftMenu === 'true'" class="ml-3 py-1">{{ item.label }}</div></router-link>
    
      <!-- Icon -->
      <div class="pr-4">
        <font-awesome-icon v-if="item.icon" :icon="item.icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "showingLeftMenu"],
};
</script>