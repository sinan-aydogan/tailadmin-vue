<template>
  <main-layout>
    <template #header>
      Tabs
    </template>
    <template #subHeader>
      Multi content in single area
    </template>
    <template>
      <grid-section col="2" gap="4">
        <!--Simple-->
        <content-card width="1">
          <template #title>
            Simple Tabs
          </template>
          <template #subTitle>
            Default, without color and radius
          </template>
          <template #content>
            <t-tab>
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </content-card>
        <!--With Color-->
        <content-card width="1">
          <template #title>
            With color
          </template>
          <template #subTitle>
            <ul class="flex justify-center mt-4 w-full">
              <li class="flex bg-indigo-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer" @click="tabColor='indigo'">
                <div v-if="tabColor=='indigo'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Indigo</div>
              </li>
              <li class="flex bg-red-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='red'">
                <div v-if="tabColor=='red'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Red</div>
              </li>
              <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='pink'">
                <div v-if="tabColor=='pink'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Pink</div>
              </li>
              <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='yellow'">
                <div v-if="tabColor=='yellow'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Yellow</div>
              </li>
              <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='purple'">
                <div v-if="tabColor=='purple'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Purple</div>
              </li>
              <li class="flex bg-gray-200 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='white'">
                <div v-if="tabColor=='white'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">White</div>
              </li>
              <li :class="{'bg-gray-600' : tabColor === 'black'}" class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='black'">
                <div v-if="tabColor=='black'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Black</div>
              </li>
              <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor='blue'">
                <div v-if="tabColor=='blue'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Blue</div>
              </li>
              <li class="flex bg-gray-500 py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer" @click="tabColor='gray'">
                <div v-if="tabColor=='gray'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Gray</div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :color="tabColor">
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </content-card>
        <!--With Radius-->
        <content-card width="1">
          <template #title>
            With radius
          </template>
          <template #subTitle>
            <ul class="flex justify-center gap-2 mt-4">
              <li :class="tabRadius === 0 && 'bg-green-500 text-white'"
                  class="bg-gray-300 p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=0">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">0</div>
              </li>
              <li :class="tabRadius === 1 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-sm p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=1">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">1</div>
              </li>
              <li :class="tabRadius === 2 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=2">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">2</div>
              </li>
              <li :class="tabRadius === 3 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-md p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=3">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">3</div>
              </li>
              <li :class="tabRadius === 4 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-lg p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=4">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">4</div>
              </li>
              <li :class="tabRadius === 5 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-xl p-2 rounded-2xl items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=5">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">5</div>
              </li>
              <li :class="tabRadius === 6 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-2xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=6">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">6</div>
              </li>
              <li :class="tabRadius === 7 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-3xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=7">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">7</div>
              </li>
              <li :class="tabRadius === 8 && 'bg-green-500 text-white'"
                  class="bg-gray-300 p-2 rounded-full items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=8">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">8</div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :radius="tabRadius" :tab-style="1" color="red">
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </content-card>
        <!--With Color and Style 2-->
        <content-card width="1">
          <template #title>
            With color and Style 2
          </template>
          <template #subTitle>
            <ul class="flex justify-center mt-4 w-full">
              <li class="flex bg-indigo-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer" @click="tabColor2='indigo'">
                <div v-if="tabColor2=='indigo'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Indigo</div>
              </li>
              <li class="flex bg-red-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='red'">
                <div v-if="tabColor2=='red'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Red</div>
              </li>
              <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='pink'">
                <div v-if="tabColor2=='pink'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Pink</div>
              </li>
              <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='yellow'">
                <div v-if="tabColor2=='yellow'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Yellow</div>
              </li>
              <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='purple'">
                <div v-if="tabColor2=='purple'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Purple</div>
              </li>
              <li class="flex bg-gray-200 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='white'">
                <div v-if="tabColor2=='white'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">White</div>
              </li>
              <li :class="{'bg-gray-600' : tabColor2 === 'black'}" class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='black'">
                <div v-if="tabColor2=='black'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Black</div>
              </li>
              <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer" @click="tabColor2='blue'">
                <div v-if="tabColor2=='blue'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Blue</div>
              </li>
              <li class="flex bg-gray-500 py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer" @click="tabColor2='gray'">
                <div v-if="tabColor2=='gray'" class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">Gray</div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :color="tabColor2" :radius="5" :tab-style="2">
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
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
import TTab from "@/components/Tab/Tab";
import TTabItem from "@/components/Tab/TabItem";

export default {
  name: "Tab",
  components: {MainLayout, GridSection, ContentCard, TTab, TTabItem},
  data(){
    return {
      tabColor: 'blue',
      tabColor2: 'pink',
      tabRadius: 0,
    }
  }
}
</script>

<style scoped>

</style>