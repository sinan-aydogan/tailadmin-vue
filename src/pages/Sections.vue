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
      <!--Without Title : Code 1-->
      <content-card width="2">
        <template #content>
          Whithout Title <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
        <template #secondContent>
          <highlightjs :code="sampleCodes.code1" language="html"/>
        </template>
      </content-card>
      <!--With Title : Code 2-->
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
        <template #secondContent>
          <highlightjs :code="sampleCodes.code2" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
            You can add a template tag for a title.
            <em class="ml-2"> Template tag names <b>#title</b></em>
          </span>
        </template>
      </content-card>
      <!--With Title and Subtitle : Code 3-->
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
        <template #secondContent>
          <highlightjs :code="sampleCodes.code3" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
            You can add a template tag for a title and a subtitle.
            <em class="ml-2"> Template tag names <b>#title and # subTitle</b></em>
          </span>
        </template>
      </content-card>
      <!--With separator : Code 4-->
      <content-card line="true" width="2">
        <template #title>
          With Line Separator
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
        </template>
        <template #secondContent>
          <highlightjs :code="sampleCodes.code4" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
            You can add a attribute which "line" for a line under the title.
            <em class="ml-2"> Line variables: <b>true or false</b></em>
          </span>
        </template>
      </content-card>
      <!--With Radius and : Code 5-->
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
        <template #secondContent>
          <highlightjs :code="sampleCodes.code5" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
            You can add a attribute which "radius" for border radius.
            <em class="ml-2"> Radius variations: <b>0, 1, 2, 3, 4, 5, 6, 7</b></em>
          </span>
        </template>
      </content-card>
      <!--With Background Color : Code 6-->
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
              <div v-if="cardColor=='red'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-blue-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='blue'">
              <div v-if="cardColor=='blue'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-indigo-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='indigo'">
              <div v-if="cardColor=='indigo'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-yellow-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='yellow'">
              <div v-if="cardColor=='yellow'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-black p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" :class="{'bg-gray-600' : cardColor === 'black'}" @click="cardColor='black'">
              <div v-if="cardColor=='black'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
            <li class="bg-gray-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='gray'">
              <div v-if="cardColor=='gray'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
            </li>
          </ul>
        </template>
        <template #secondContent>
          <highlightjs :code="sampleCodes.code6" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
            You can add a attribute which "color" for background color. The color of card separator line will match it
            <em class="ml-2"> Color variations: <b>red, blue, indigo, yellow, green, gray, black, white</b></em>
          </span>
        </template>
      </content-card>
      <!--With Width : Code 7-->
      <content-card :width="cardWidth">
        <template #title>
          Changeable Width
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
          posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
          sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
          molestie.
          <div class="text-lg font-bold text-center">

          </div>
          <ul class="flex justify-center gap-2 mt-4">
            <li :class="cardWidth == 1 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white'" class="border-2 p-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer" @click="cardWidth='1'">
              1
            </li>
            <li :class="cardWidth == 2 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white'" class="border-2 bp-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer" @click="cardWidth='2'">
              2
            </li>
            <li :class="cardWidth == 3 ? 'bg-green-400 text-white border-green-500 font-semibold' : 'bg-white'" class="border-2 bg-p-2 w-7 h-7 rounded-full items-center flex justify-center cursor-pointer" @click="cardWidth='3'">
              3
            </li>
          </ul>
        </template>
        <template #secondContent>
          <highlightjs :code="sampleCodes.code7" language="html"/>
          <span class="border bg-gray-100 p-2 flex my-2">
             The card width synchronize with grid size. For example when your grid size 6, you can choose the width from 1 to 6.
            The grid size of this page is 3.
          </span>
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
import 'highlight.js/styles/vs.css'
import 'highlight.js/styles/default.css'


export default {
  name: "Sections",
  components: {MainLayout,GridSection,ContentCard},
  data(){
    return {
      cardColor: 'red',
      cardRadius : 2,
      cardWidth : 3,
      sampleCodes : {
        code1:'<content-card width="2">\n' +
            '  <template #content>\n' +
            '    Card content\n' +
            '  </template>\n' +
            '</content-card>',
        code2:'<content-card width="1">\n' +
            '  <template #title>\n' +
            '    Card Title\n' +
            '  </template>\n' +
            '  <template #content>\n' +
            '    Card content\n' +
            '  </template>\n' +
            '</content-card>',
        code3:'<content-card width="1">\n' +
            '  <template #title>\n' +
            '    Card Title\n' +
            '  </template>\n' +
            '  <template #subTitle>\n' +
            '    Card Sub Title\n' +
            '  </template>\n' +
            '  <template #content>\n' +
            '    Card content\n' +
            '  </template>\n' +
            '</content-card>',
        code4: ' <content-card width="2" line="true">\n' +
            '        <template #title>\n' +
            '          Card Title\n' +
            '        </template>\n' +
            '        <template #content>\n' +
            '          Card content\n' +
            '        </template>\n' +
            '      </content-card>',
        code5:'<content-card width="1" radius="2" color="blue" border="true">\n' +
            '  <template #title>\n' +
            '          Card Title\n' +
            '  </template>\n' +
            '  <template #content>\n' +
            '    Card content\n' +
            '  </template>\n' +
            '</content-card>',
        code6: '<content-card width="2" color="red" line="true">\n' +
            '  <template #title>\n' +
            '    Card Title\n' +
            '  </template>\n' +
            '  <template #content>\n' +
            '    Card Content\n' +
            '  </template>\n' +
            '</content-card>',
        code7: '<content-card width="3">\n' +
            '  <template #title>\n' +
            '    Card Title\n' +
            '  </template>\n' +
            '  <template #content>\n' +
            '    Card Content\n' +
            '  </template>\n' +
            '</content-card>'
      }
    }
  }
}
</script>

<style scoped>

</style>