<template>
  <div :class="['flex px-2 h-8 py-1 items-center max-w-min max-h-min whitespace-nowrap gap-2 select-none',collapsible && 'cursor-pointer',colorStyle,radiusStyle]" @click="toggle">
    <slot name="icon"  @click="toggle"></slot>
    <transition name="fade">
      <div v-if="showTitle || !collapsible" class="flex justify-between items-center gap-1 overflow-hidden">
        <slot></slot>
        <span v-if="value" class="flex px-1 my-1 text-xs items-center justify-center border rounded-full">{{value}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
import {radiusSize} from "@/mixins/radiusSizeMixin";

export default {
  name: "Badge",
  mixins: [radiusSize],
  props : {
    color : {
      type : String,
      required : false,
      default : 'blue'
    },
    value : {
      type : String,
      required: false
    },
    collapsible:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTitle:false,
      colors : [
        {key:'red', badgeStyle:'bg-red-500 text-white'},
        {key:'blue', badgeStyle:'bg-blue-500 text-white'},
        {key:'green', badgeStyle:'bg-green-500 text-white'},
        {key:'yellow', badgeStyle:'bg-yellow-500 text-white'},
        {key:'indigo', badgeStyle:'bg-indigo-500 text-white'},
        {key:'purple', badgeStyle:'bg-purple-500 text-white'},
        {key:'pink', badgeStyle:'bg-pink-500 text-white flex'},
        {key:'white', badgeStyle:'bg-white border text-gray-700 flex'},
        {key:'gray', badgeStyle:'bg-gray-500 text-gray-700 flex'},
        {key:'black', badgeStyle:'bg-black text-white flex'},
      ]
    }
  },
  methods:{
    toggle(){
      this.showTitle = !this.showTitle
    }
  },
  computed : {
    colorStyle(){
      let i, colorStyle;
      if(this.color){
        for(i=0;i<this.colors.length ; i++){
          if(this.color === this.colors[i].key){
            colorStyle = this.colors[i].badgeStyle;
          }
        }
      }
      return colorStyle;
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active{
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-width: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  max-width: 250px;
}
</style>