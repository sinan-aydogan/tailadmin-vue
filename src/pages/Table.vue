<template>
  <MainLayout>
    <!--Header-->
    <template #header>
      Tables
    </template>
    <!--Content-->
    <template #default>
      <t-table :content="sampleData.users" :header="header" color="yellow">
        <template #photo="{props}">
          <img :src="props.photo"/>
        </template>
      </t-table>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import TTable from "@/components/Table/Table";
//Sample Data
import users from '@/data/users.json'

export default {
  name: "Table",
  components : {
    MainLayout,
    TTable,
  },
  data(){
    return {
      sampleData : {
        users
      },
      header : ['name','email','age','photo']
    }
  }
}
</script>

<style scoped>

</style>