<template>
  <div
      class="p-4"
      :class="[colorValue,widthValue,radiusValue,{'border' : border},'relative']">
    <!--Card Title-->
    <div class="font-bold text-xl">
      <slot name="title"></slot>
    </div>
    <!--Card Subtitle-->
    <div class="text-sm">
      <slot name="subTitle"></slot>
    </div>
    <!--Separator-->
    <hr v-if="line" :class="'my-1 border border-'+color+'-300'"/>
    <div class="absolute top-4 right-4 text-gray-600 hover:bg-gray-500 hover:text-white w-7 h-7 flex items-center justify-center rounded-full cursor-pointer" @click="showSecondContent = ! showSecondContent">
      <font-awesome-icon icon="code" />
    </div>
    <!--Card Main Content-->
    <slot v-if="!showSecondContent" name="content"></slot>
    <!--Card Second Content-->
    <slot v-if="showSecondContent" name="secondContent"></slot>
  </div>
</template>

<script>

export default {
  name: "ContentCard",
  props: ['color', 'width', 'line', 'radius', 'border'],
  data() {
    return {
      showSecondContent : false,
    }
  },
  computed: {
    colorValue() {
      if (this.color === 'red') {
        return 'bg-red-200 border-red-500';
      } else if (this.color === 'blue') {
        return 'bg-blue-200 border-blue-500';
      } else if (this.color === 'indigo') {
        return 'bg-indigo-200 border-indigo-500';
      } else if (this.color === 'yellow') {
        return 'bg-yellow-200 border-yellow-500';
      } else if (this.green === 'green') {
        return 'bg-green-200 border-green-500';
      } else if (this.green === 'gray') {
        return 'bg-gray-200 border-gray-500';
      } else if (this.green === 'black') {
        return 'bg-gray-700 border-black text-gray-200';
      } else {
        return 'bg-white'
      }
    },
    widthValue() {
      if (this.width != null) {
        return 'col-span-12 lg:col-span-' + this.width;
      } else {
        return 'col-span-12'
      }
    },
    radiusValue() {
      if (this.radius == 1) {
        return 'rounded-sm'
      } else if (this.radius == 2) {
        return 'rounded-md'
      } else if (this.radius == 3) {
        return 'rounded-lg'
      } else if (this.radius == 4) {
        return 'rounded-xl'
      } else if (this.radius == 5) {
        return 'rounded-sm'
      } else {
        return null;
      }
    }
  }
}
</script>