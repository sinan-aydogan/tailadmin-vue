<template>
  <div :class="['flex flex-col w-full border border-gray-400 overflow-hidden',radiusStyle]">
    <slot></slot>
  </div>
</template>

<script>
import {radiusSize} from "@/mixins/radiusSizeMixin";

export default {
  name: "Collapsible",
  mixins:[radiusSize]
}
</script>

<style scoped>
/*
.collapsible-border:first-child{
  border-radius: 12px 12px 0 0;
  border-top: 1px solid #9CA3AF;
}*/
.collapsible-border{
  border-bottom: 1px solid #9CA3AF;
}
.collapsible-border:last-child {
  border-bottom: 0px solid #9CA3AF;
}

</style>