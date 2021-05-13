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
          diff-value="%15"
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
          diff-value="+80"
          icon="shopping-bag"
          radius="4"
          widget-value="3"
          width="1">
        <template #title>
          Sales
        </template>
      </StatisticWidget>
      <StatisticWidget
          chart-type="line-chart"
          color="blue"
          diff-direction="up"
          diff-value="%8"
          icon="lira-sign"
          radius="4"
          widget-value="12.254,05 TL"
          width="1">
        <template #title>
          Refunds
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