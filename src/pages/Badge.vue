<template>
  <main-layout>
    <template #header>
      Badges
    </template>
    <template #subHeader>
      Useful badges like tags
    </template>
    <template>
      <grid-section col="2" gap="4">
        <!--With Radius-->
        <content-card width="2">
          <template #title>
            With Radius Options
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :radius="0">Radius - 0</t-badge>
              <t-badge :radius="1">Radius - 1</t-badge>
              <t-badge :radius="2">Radius - 2</t-badge>
              <t-badge :radius="3">Radius - 3</t-badge>
              <t-badge :radius="4">Radius - 4</t-badge>
              <t-badge :radius="5">Radius - 5</t-badge>
              <t-badge :radius="6">Radius - 6</t-badge>
              <t-badge :radius="7">Radius - 7</t-badge>
              <t-badge :radius="8">Radius - 8</t-badge>
            </div>
          </template>
        </content-card>
        <!--With Color-->
        <content-card width="2">
          <template #title>
            With Color Options
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :radius="8" color="indigo">Indigo</t-badge>
              <t-badge :radius="8" color="red">Red</t-badge>
              <t-badge :radius="8" color="pink">Pink</t-badge>
              <t-badge :radius="8" color="yellow">Yellow</t-badge>
              <t-badge :radius="8" color="purple">Purple</t-badge>
              <t-badge :radius="8" color="white">White</t-badge>
              <t-badge :radius="8" color="black">Black</t-badge>
              <t-badge :radius="8" color="red">Red</t-badge>
              <t-badge :radius="8" color="blue">Blue</t-badge>
            </div>
          </template>
        </content-card>
        <!--With Value-->
        <content-card width="2">
          <template #title>
            With Value Option
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :radius="8" color="indigo" value="123">Number</t-badge>
              <t-badge :radius="8" color="red" value="12 TL">Currency</t-badge>
              <t-badge :radius="8" color="pink" value="0,25">Double</t-badge>
              <t-badge :radius="8" color="yellow" value="15 pcs.">Count</t-badge>
              <t-badge :radius="8" color="purple" value="03.09.2025">Date</t-badge>
              <t-badge :radius="8" color="white" value="®">Special Char.</t-badge>
              <t-badge :radius="8" color="black" value="Plus">String</t-badge>
              <t-badge :radius="8" color="red" value="+25%">Percent</t-badge>
              <t-badge :radius="8" color="blue" value="-15px">Mathematical Signs</t-badge>
            </div>
          </template>
        </content-card>
        <!--With Collapsible-->
        <content-card width="2">
          <template #title>
            With Icon and Value Option
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-badge :collapsible="true" :radius="1" color="indigo"><font-awesome-icon slot="icon" icon="info"/>Number</t-badge>
              <t-badge :collapsible="true" :radius="2" color="red"><font-awesome-icon slot="icon" icon="info"/>Currency</t-badge>
              <t-badge :collapsible="true" :radius="3" color="pink"><font-awesome-icon slot="icon" icon="info"/>Double</t-badge>
              <t-badge :collapsible="true" :radius="4" color="yellow" value="15 pcs."><font-awesome-icon slot="icon" icon="info"/>Count</t-badge>
              <t-badge :collapsible="true" :radius="5" color="purple" value="03.09.2025"><font-awesome-icon slot="icon" icon="info"/>Date</t-badge>
              <t-badge :collapsible="true" :radius="6" color="white" value="®"><font-awesome-icon slot="icon" icon="info"/>Special Char.</t-badge>
              <t-badge :collapsible="true" :radius="7" color="black" value="Plus"><font-awesome-icon slot="icon" icon="info"/>String</t-badge>
              <t-badge :collapsible="true" :radius="8" color="red" value="+25%"><font-awesome-icon slot="icon" icon="info"/>Percent</t-badge>
              <t-badge :collapsible="true" :radius="8" color="blue" value="-15px"><font-awesome-icon slot="icon" icon="info"/>Mathematical Signs</t-badge>
            </div>
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
import TBadge from "@/components/Badge/Badge";

export default {
  name: "Badge",
  components: {MainLayout, GridSection, ContentCard, TBadge}
}
</script>

<style scoped>

</style>