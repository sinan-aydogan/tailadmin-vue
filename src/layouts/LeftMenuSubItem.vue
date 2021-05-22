<template>
  <!-- Item Container-->
  <div v-show="showingLeftMenu">
    <router-link
        :to="item.link"
        tag="div">
    <div class="flex items-center justify-start left-menu-sub-item">
      <!-- Label -->
      <div v-if="showingLeftMenu === 'true'" class="ml-3 py-1">{{ item.label }}</div>
    
      <!-- Icon -->
      <div class="pr-4">
        <font-awesome-icon v-if="item.icon" :icon="item.icon" />
      </div>
    </div>
      </router-link>
  </div>
</template>

<script>
export default {
  props: ["item", "showingLeftMenu"],
};
</script>