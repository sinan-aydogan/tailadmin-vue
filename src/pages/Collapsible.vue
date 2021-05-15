<template>
  <main-layout>
    <template #header>
      Collapsible Content
    </template>
    <template #subHeader>

    </template>
    <template>
      <grid-section col="2" gap="4">
        <content-card width="2">
          <template #title>
            Simple
          </template>
          <template #content>
            <t-collapsible color="red">
              <!--First Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Second Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
            </t-collapsible>
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
import TCollapsible from "@/components/Collapsible/Collapsible";
import TCollapsibleItem from "@/components/Collapsible/CollapsibleItem";

export default {
  name: "Collapsible",
  components: {MainLayout, GridSection, ContentCard,TCollapsible,TCollapsibleItem}
}
</script>

<style scoped>

</style>