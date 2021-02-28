<template>
  <div>
    <!-- Root Item-->
    <div
      @click="showingSubMenu = !showingSubMenu"
      :class="{
        'justify-between': showingLeftMenu,
        'justify-center': !showingLeftMenu,
      }"
      class="flex flex-row items-center p-2 text-gray-300 bg-blue-800 border border-gray-600 cursor-pointer bg-opacity-40 hover:bg-opacity-70 hover:text-white hover:font-bold"
    >
      <!-- Label -->
      <div v-if="showingLeftMenu">{{ item.label }}</div>
      <!-- Icon -->
      <div>
        <font-awesome-icon :icon="item.icon != '' ? item.icon : 'dot-circle'" />
      </div>
    </div>

    <!-- Sub Item -->
    <div
      v-show="showingSubMenu"
      v-for="(item, index) in item.items"
      :key="index"
      class="flex flex-col py-1 mt-1"
    >
      <left-menu-sub-item
        :item="item"
        :showingLeftMenu="showingLeftMenu"
      ></left-menu-sub-item>
    </div>
  </div>
</template>

<script>
import LeftMenuSubItem from "../layouts/LeftMenuSubItem";
export default {
  components: {
    LeftMenuSubItem,
  },
  props: ["item", "showingLeftMenu"],
  data() {
    return {
      showingSubMenu: false,
    };
  },
};
</script>