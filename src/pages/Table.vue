<template>
  <MainLayout>
    <!--Header-->
    <template #header>
      Tables
    </template>
    <!--Subheader-->
    <template #subHeader>
      Customizable tables
    </template>
    <!--Content-->
    <template #default>
      <div class="my-2 border rounded-md overflow-hidden">
        <ul class="flex justify-center">
          <li class="bg-red-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='red'">
            <div v-if="tableColor=='red'" :class="selectorInnerStyle">Red</div>
          </li>
          <li class="bg-blue-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='blue'">
            <div v-if="tableColor=='blue'" :class="selectorInnerStyle">Blue</div>
          </li>
          <li class="bg-indigo-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='indigo'">
            <div v-if="tableColor=='indigo'" :class="selectorInnerStyle">Indigo</div>
          </li>
          <li class="bg-yellow-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='yellow'">
            <div v-if="tableColor=='yellow'" :class="selectorInnerStyle">Yellow</div>
          </li>
          <li :class="{'bg-gray-600' : tableColor === 'black'}" class="bg-black p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='black'">
            <div v-if="tableColor=='black'" :class="selectorInnerStyle">Black</div>
          </li>
          <li class="bg-gray-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='gray'">
            <div v-if="tableColor=='gray'" :class="selectorInnerStyle">Gray</div>
          </li>
        </ul>
      </div>
      <t-table :color="tableColor" :content="sampleData.users" :header="header">
        <template #photo="{props}">
          <div class="flex justify-center">
            <t-avatar :link="props.photo" :radius="8" :size="3"/>
          </div>
        </template>
      </t-table>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import TTable from "@/components/Table/Table";
import TAvatar from "@/components/Avatar/Avatar";
//Sample Data
import users from '@/data/users.json'

export default {
  name: "Table",
  components : {
    MainLayout,
    TTable,
    TAvatar
  },
  data(){
    return {
      tableColor : 'blue',
      sampleData : {
        users
      },
      header : ['name','email','age','photo']
    }
  },
  computed:{
    selectorInnerStyle(){
      return 'flex-shrink-0 w-full text-center bg-opacity-50 px-2 py-1 bg-white rounded-full font-semibold z-10'
    }
  }
}
</script>

<style scoped>

</style>