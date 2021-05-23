<template>
  <div :class="[team === true ? '-ml-4 overflow-hidden' : 'relative']">
    <img :class="[radiusStyle, sizeStyle, team === true ? 'border-2 border-white border-opacity-50' : '']" :src="link">
    <span
        v-if="indicator"
        :class="[
                'absolute flex justify-center items-center w-1/3 h-1/3 rounded-full text-white font-semibold',
                size<7 ? 'text-xs' : 'text-normal',
                indicatorStyle
                ]">
            <span v-text="size>2 ? indicator.label : null"/>
    </span>
  </div>
</template>

<script>
import {radiusSize} from "@/mixins/radiusSizeMixin";
import {avatarStyle} from "@/mixins/avatarStyleMixin";
export default {
  mixins : [radiusSize,avatarStyle],
  props : {
    link: {
      type: String,
      require: true,
      default: require('@/assets/img/dummyAvatar.svg')
    },
    team: {
      type: Boolean,
      require: false
    }
  },
  name: "Avatar"
}
</script>