<template>
  <div>
    <!-- Root Item-->
    <router-link
        @click.native="showingSubMenu = !showingSubMenu ; $emit('showLeftMenuEmit')"
        :class="{
        'justify-between': showingLeftMenu === 'true',
        'justify-center': showingLeftMenu === 'false',
        'bg-white text-gray-700 hover:bg-blue-300': showingSubMenu,
        'text-white hover:text-gray-700 hover:bg-gray-100': !showingSubMenu,
      }"
        class="left-menu-item"
     :to="item.link">
      <!-- Label -->
      <div v-if="showingLeftMenu === 'true'">{{ item.label }}</div>
      <!-- Icon -->
      <div>
        <font-awesome-icon :icon="item.icon !== '' ? item.icon : 'dot-circle'" />
      </div>
    </router-link>

    <!-- Sub Item -->
    <div
      v-show="showingSubMenu"
      v-for="(item, index) in item.items"
      :key="index"
      class="flex flex-col mt-1"
    >
      <left-menu-sub-item
        :item="item"
        :showingLeftMenu="showingLeftMenu === 'true'"
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