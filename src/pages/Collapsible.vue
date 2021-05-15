<template>
  <main-layout>
    <template #header>
      Collapsible Content
    </template>
    <template #subHeader>

    </template>
    <template>
      <!--Simple-->
      <grid-section col="2" gap="4">
        <content-card width="1">
          <template #title>
            Simple
          </template>
          <template #subTitle>
            Radius size "0"
          </template>
          <template #content>
            <t-collapsible>
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
              <!--Third Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Fourth Item-->
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
      <!--Colorful-->
      <content-card width="1">
        <template #title>
          Colorful
        </template>
        <template #subTitle>
          Radius size "3"
        </template>
        <template #content>
          <t-collapsible :radius="3">
            <!--First Item-->
            <t-collapsible-item color="red">
              <template #title>
                Red
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Second Item-->
            <t-collapsible-item color="blue">
              <template #title>
                Blue
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Third Item-->
            <t-collapsible-item color="yellow">
              <template #title>
                Yellow
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Fourth Item-->
            <t-collapsible-item color="purple">
              <template #title>
                Purple
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
          </t-collapsible>
        </template>
      </content-card>
      <!--Icons-->
      <content-card width="1">
        <template #title>
          With Icon
        </template>
        <template #subTitle>
          Radius size "5"
        </template>
        <template #content>
          <t-collapsible radius="5">
            <!--First Item-->
            <t-collapsible-item color="red">
              <template #title>
                <font-awesome-icon icon="shopping-bag"/>
                Red
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Second Item-->
            <t-collapsible-item color="blue">
              <template #title>
                <font-awesome-icon icon="tv"/>
                Blue
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Third Item-->
            <t-collapsible-item color="yellow">
              <template #title>
                <font-awesome-icon icon="tasks"/>
                Yellow
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Fourth Item-->
            <t-collapsible-item color="purple">
              <template #title>
                <font-awesome-icon icon="envelope"/>
                Purple
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
          </t-collapsible>
        </template>
      </content-card>
      <!--Align-->
      <content-card width="1">
        <template #title>
          With Title Align
        </template>
        <template #subTitle>
          Radius size "7"
        </template>
        <template #content>
          <t-collapsible radius="7">
            <!--Default Item-->
            <t-collapsible-item color="black">
              <template #title>
                <font-awesome-icon icon="chart-bar"/>
                Default, non-added align indicator
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--First Item-->
            <t-collapsible-item align="left" color="white">
              <template #title>
                <font-awesome-icon icon="shopping-bag"/>
                Left
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Second Item-->
            <t-collapsible-item align="center" color="blue">
              <template #title>
                <font-awesome-icon icon="tv"/>
                Center
              </template>
              <template #content>
                Content
              </template>
            </t-collapsible-item>
            <!--Third Item-->
            <t-collapsible-item align="right" color="yellow">
              <template #title>
                <font-awesome-icon icon="tasks"/>
                Right
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