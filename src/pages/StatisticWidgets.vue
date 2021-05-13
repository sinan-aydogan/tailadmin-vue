<template>
  <main-layout>
    <template #header>
      Statistic Widgets
    </template>
    <template #subHeader>
      For showing whole data types
    </template>
    <grid-section col="3" gap="4">
      <StatisticWidget
          chart-type="line-chart"
          color="black"
          diff-direction="down"
          diff-value="15%"
          icon="chart-bar"
          radius="4"
          widget-value="254"
          width="1">
        <template #title>
          Incomes
        </template>
      </StatisticWidget>
      <StatisticWidget
          chart-type="line-chart"
          color="red"
          diff-direction="down"
          diff-value="8"
          icon="shopping-bag"
          radius="4"
          widget-value="30"
          width="1">
        <template #title>
          Daily Done Charts
        </template>
      </StatisticWidget>
      <StatisticWidget
          chart-type="line-chart"
          color="blue"
          diff-direction="up"
          diff-value="8%"
          icon="lira-sign"
          radius="6"
          widget-value="12.254,05 TL"
          width="1">
        <template #title>
          Refunds
        </template>
      </StatisticWidget>
      <!--With Line Chart, Without Diff Direction, Icon -->
      <StatisticWidget
          chart-type="line-chart"
          color="yellow"
          diff-value="30%"
          radius="7"
          widget-value="254"
          width="1">
        <template #title>
          Customer Complaints
        </template>
      </StatisticWidget>
      <!--With Bar Chart, Without Diff Direction, Icon-->
      <StatisticWidget
          chart-type="bar-chart"
          color="indigo"
          diff-direction="up"
          diff-value="30%"
          radius="1"
          widget-value="254"
          width="2">
        <template #title>
          New Customers
        </template>
      </StatisticWidget>
    </grid-section>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import GridSection from "@/layouts/GridSection";
import StatisticWidget from "@/components/Card/StatisticWidget";

export default {
  name: "StaticWidgets",
  components : {
    MainLayout,
    GridSection,
    StatisticWidget,
  }
}
</script>

<style scoped>

</style>