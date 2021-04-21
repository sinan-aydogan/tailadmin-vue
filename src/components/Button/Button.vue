<template>
  <button :class="'button '+buttonStyle" :onclick="'window.location.href=\''+link+'\''">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color : String,
    size : String,
    radius : Number,
    link : {
      type : String,
      default : '#'
    }
  },
  data: function () {
    return {
      radiusSizes: [
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-full'
      ]
    }
  },
  computed: {
    buttonStyle() {
      let colorStyle;
      let sizeStyle;
      let radiusStyle;
      /*Color Style*/
      if (this.color) {
        colorStyle = 'bg-' + this.color + '-500 border-' + this.color + '-600 hover:text-' + this.color + '-700 focus:text-' + this.color + '-700 hover:bg-' + this.color + '-100 focus:bg-' + this.color + '-100';
      } else {
        colorStyle = 'bg-gray-500 border-gray-600 hover:text-gray-700 focus:text-gray-700 hover:bg-gray-100 focus:bg-gray-100';
      }

      /*Size Style*/
      if (this.size === 'full') {
        sizeStyle = 'w-full text-center ';
      } else if (this.size === 'sm') {
        sizeStyle = 'text-sm min-w-min min-h-min'
      } else if (this.size === 'xl') {
        sizeStyle = 'text-xl'
      }

      /*Radius Style*/
      let i;
      for(i=0; i<this.radiusSizes.length;i++){
        if(i === this.radius-1){
          radiusStyle = this.radiusSizes[i];
        }
      }

      return colorStyle + ' ' + sizeStyle + radiusStyle;
    },
  },

}
</script>