<template>
  <main-layout>
    <template #header>
      Dropdowns
    </template>
    <template #subHeader>
      Menu or multi functional buttons
    </template>
    <template>
      <grid-section col="3" gap="4">
        <content-card width="2">
          <template #title>
            Simple
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <!--Simple Dropdown 1-->
              <t-dropdown color="red">
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--Indigo-->
              <t-dropdown color="indigo">
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--White-->
              <t-dropdown>
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
              <!--Black-->
              <t-dropdown color="black">
                <template #title>
                  Title
                </template>
                <t-dropdown-item>Menu 1</t-dropdown-item>
                <t-dropdown-item>Menu 2</t-dropdown-item>
                <t-dropdown-item>Menu 3</t-dropdown-item>
              </t-dropdown>
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
import TDropdown from "@/components/Dropdown/Dropdown";
import TDropdownItem from "@/components/Dropdown/DropdownItem";

export default {
  name: "Dropdown",
  components: {MainLayout, GridSection, ContentCard,TDropdown,TDropdownItem}
}
</script>

<style scoped>

</style>