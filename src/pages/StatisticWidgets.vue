<template>
  <main-layout>
    <StatisticWidget
        chart-type="line-chart"
        color="yellow"
        diff-direction="down"
        diff-value="15"
        radius="4"
        widget-value="">
      <template #title>
        Currency
      </template>
    </StatisticWidget>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import StatisticWidget from "@/components/Card/StatisticWidget";

export default {
  name: "StaticWidgets",
  components : {
    MainLayout,
    StatisticWidget,
  }
}
</script>

<style scoped>

</style>