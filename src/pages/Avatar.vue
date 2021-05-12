<template>
  <main-layout>
    <template #header>
      Avatars
    </template>
    <template #default>
      <t-grid col="2" gap="2">
        <!--Avatar Radius Card-->
        <t-card width="1">
          <template #title>
            Avatar Radius
          </template>
          <template #subTitle>
            8 different radius sizes
          </template>
          <template #content>
            <div class="flex flex-row gap-4">
              <t-avatar v-for="i in 8" :key="i" :radius="i"/>
            </div>
          </template>
        </t-card>
        <!--Avatar Group-->
        <t-card width="1">
          <template #title>
            Avatar Group - Team Members
          </template>
          <template #subTitle>
            Best for lists of project members
          </template>
          <template #content>
            <div class="flex flex-row gap-4">
              <t-avatar-group>
                <t-avatar v-for="i in 8" :key="i" :radius="8" :team="true"/>
              </t-avatar-group>
            </div>
          </template>
        </t-card>
        <!--Avatar Sizes Card-->
        <t-card width="1">
          <template #title>
            Avatar Sizes
          </template>
          <template #subTitle>
            6 different sizes
          </template>
          <template #content>
            <div class="flex flex-row gap-4 items-end">
              <t-avatar v-for="i in 8" :key="i" :radius="3" :size="i"/>
            </div>
          </template>
        </t-card>
        <!--Avatar Indicator Card-->
        <t-card width="1">
          <template #title>
            Avatar Indicator
          </template>
          <template #subTitle>
            Different colors
          </template>
          <template #content>
            <div class="flex flex-row gap-4 items-end">
              <t-avatar :indicator="{color:'red', label: 2, position: 'lb'}" :radius="1" :size="1"/>
              <t-avatar :indicator="{color:'green', label: 14, position: 'rb'}" :radius="2" :size="2"/>
              <t-avatar :indicator="{color:'blue', label: 2, position: 'lt'}" :radius="3" :size="3"/>
              <t-avatar :indicator="{color:'indigo', label: 7, position: 'rt'}" :radius="4" :size="4"/>
              <t-avatar :indicator="{color:'yellow', position: 'lb'}" :radius="5" :size="5"/>
              <t-avatar :indicator="{color:'purple', label: 12, position: 'rt'}" :radius="6" :size="6"/>
              <t-avatar :indicator="{color:'green', position: 'rb'}" :radius="7" :size="7"/>
              <t-avatar :indicator="{color:'blue', label: 5, position: 'lb'}" :radius="8" :size="8"/>
            </div>
          </template>
        </t-card>
      </t-grid>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import TGrid from "@/layouts/GridSection";
import TCard from "@/components/Card/ContentCard";
import TAvatar from "@/components/Avatar/Avatar";
import TAvatarGroup from "@/components/Avatar/AvatarGroup";
export default {
  name: "Avatar",
  components : {
    MainLayout,
    TGrid,
    TCard,
    TAvatar,
    TAvatarGroup
  }
}
</script>

<style scoped>

</style>