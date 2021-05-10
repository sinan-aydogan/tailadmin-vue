<template>
  <main-layout action-buttons="false">
    <template #header>Charts</template>
    <template #subHeader>Supported ChartJS graphics</template>
    <template>
      <GridSection col="2" gap="2">
        <!--Chart 1-->
        <content-card width="1">
          <bar-chart :chartdata="chart1.data" :options="chart1.option"/>
        </content-card>
        <!--Chart 2-->
        <content-card width="1">
          <bar-chart :chartdata="chart2.data" :options="chart2.option"/>
        </content-card>
        <!--Chart 3-->
        <content-card width="1">
          <bar-chart :chartdata="chart3.data" :options="chart3.option"/>
        </content-card>
        <!--Chart 4-->
        <content-card width="1">
          <bar-chart :chartdata="chart4.data" :options="chart4.option"/>
        </content-card>
        <!--Chart 5-->
        <content-card width="1">
          <bar-chart :chartdata="chart5.data" :options="chart5.option"/>
        </content-card>
        <!--Chart 6-->
        <content-card width="1">
          <bar-chart :chartdata="chart6.data" :options="chart6.option"/>
        </content-card>
      </GridSection>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import ContentCard from "@/components/Card/ContentCard";
import GridSection from "@/layouts/GridSection";
//CharComponents
import BarChart from "@/components/Chart/BarChart";
export default {
  name: "Charts",
  components : {
    BarChart,
    MainLayout,
    ContentCard,
    GridSection
  },
  data(){
    return {
      chart1 : {
        data : {},
        option : {}
      },
      chart2 : {
        data : {},
        option : {}
      },
      chart3 : {
        data : {},
        option : {}
      },
      chart4 : {
        data : {},
        option : {}
      },
      chart5 : {
        data : {},
        option : {}
      },
      chart6 : {
        data : {},
        option : {}
      },
    }
  }
}
</script>

<style scoped>

</style>