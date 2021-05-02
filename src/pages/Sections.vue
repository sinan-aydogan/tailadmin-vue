<template>
<main-layout>
  <template #header>
    Sections
  </template>
  <template #subHeader>
    Content Boxes and Data Widgets
  </template>
  <template>
    <grid-section col="3" gap="4">

      <content-card width="2">
        <template #title>

        </template>
        <template #content>
          Whithout Title <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
      </content-card>

      <content-card width="1">
        <template #title>
          With Title
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
      </content-card>

      <content-card width="1">
        <template #title>
          With Sub Title
        </template>
        <template #subTitle>
          This is a sub title
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
      </content-card>

      <content-card width="1" line="true">
        <template #title>
          With Line Seperator
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
      </content-card>

      <content-card width="1" :radius="cardRadius" color="blue" border="true">
        <template #title>
          With corner radius and border
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
          <div class="text-2xl font-bold text-center">
            5 variations
          </div>
          <ul class="flex justify-center gap-2 mt-4">
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=0">
              <div v-if="cardRadius===0" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white">0</div>
            </li>
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=1">
              <div v-if="cardRadius===1" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-sm z-10">1</div>
            </li>
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=2">
              <div v-if="cardRadius===2" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-md z-10">2</div>
            </li>
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=3">
              <div v-if="cardRadius===3" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-lg z-10">3</div>
            </li>
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=4">
              <div v-if="cardRadius===4" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-xl z-10">4</div>
            </li>
            <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=5">
              <div v-if="cardRadius===5" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-full z-10">5</div>
            </li>
          </ul>
        </template>
      </content-card>

      <content-card width="2" :color="cardColor" line="true">
        <template #title>
          Changeable Backgrounds
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
          <div class="text-2xl font-bold text-center">
            7 colors
          </div>
          <ul class="flex justify-center gap-2 mt-4">
            <li class="bg-red-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='red'">
              <div v-if="cardColor==='red'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-blue-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='blue'">
              <div v-if="cardColor==='blue'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-indigo-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='indigo'">
              <div v-if="cardColor==='indigo'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-yellow-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='yellow'">
              <div v-if="cardColor==='yellow'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-black p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" :class="{'bg-gray-600' : cardColor === 'black'}" @click="cardColor='black'">
              <div v-if="cardColor==='black'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-gray-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='gray'">
              <div v-if="cardColor==='gray'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
          </ul>
        </template>
      </content-card>

    </grid-section>
  </template>
</main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import GridSection from "@/layouts/GridSection";
import ContentCard from "@/components/Card/ContentCard";
export default {
  name: "Sections",
  components: {MainLayout,GridSection,ContentCard}
}
</script>

<style scoped>

</style>