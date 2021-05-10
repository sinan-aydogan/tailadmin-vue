<template>
  <div>
    <!-- Root Item-->
    <router-link
        @click.native="showingSubMenu = !showingSubMenu ; $emit('showLeftMenuEmit')"
        :class="{
        'justify-start': showingLeftMenu === 'true',
        'justify-center': showingLeftMenu === 'false',
        'bg-white text-gray-700 rounded-md': showingSubMenu,
        'text-white hover:text-gray-700 hover:bg-gray-100 rounded-md': !showingSubMenu,
      }"
        class="left-menu-item"
     :to="item.link">
      <!-- Icon -->
      <div>
        <font-awesome-icon v-if="item.icon" :icon="item.icon" />
      </div>
      <!-- Label -->
      <div
          v-if="showingLeftMenu === 'true'"
          :class="['w-full',item.icon ? 'ml-3':'']">
        {{ item.label }}
      </div>
      <!--Indicator Icon-->
      <font-awesome-icon v-if="item.items && !showingSubMenu && showingLeftMenu == 'true'" class="mr-1" icon="angle-down" />
      <font-awesome-icon v-if="item.items && showingSubMenu && showingLeftMenu == 'true'" class="mr-1" icon="angle-left" />
    </router-link>

    <!-- Sub Item -->
    <transition name="fade">
    <div
      v-show="showingSubMenu"
      class="flex flex-col mt-1 bg-gray-100 bg-opacity-10 rounded-md overflow-hidden"
    >
      <left-menu-sub-item
        v-for="(item, index) in item.items"
        :key="index"
        :item="item"
        :showingLeftMenu="showingLeftMenu"/>
    </div>
    </transition>
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
<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter{
  opacity: 0;
  max-height: 0px;
}
.fade-enter-to{
  opacity: 1;
  max-height: 700px;
}
.fade-leave {
  opacity: 1;
  max-height: 700px;
}
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>