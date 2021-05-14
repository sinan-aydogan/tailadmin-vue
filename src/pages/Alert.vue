<template>
  <main-layout>
    <template #header>
      Alerts
    </template>
    <template #subHeader>
      Notifications and alert boxes
    </template>
    <template>
      <grid-section col="3" gap="4">
        <content-card width="3">
          <template #title>
            Alert Boxes
          </template>
          <template #subTitle>
            Closeable, colorful and with the closer timer
          </template>
          <template #content>
            <div class="grid grid-cols-3 gap-4">
              <t-alert :border="true" :closeable="true" color="red" radius="5">
                <font-awesome-icon icon="trash" size="lg"/><b>Successfuly deleted</b> ( Lorem ipsum ) <small><b>Time:</b><em> 03.09.2025</em></small>
              </t-alert>
              <t-alert :closeable="true" color="green" radius="5">
                <font-awesome-icon icon="plus-circle" size="lg"/><b>Successfuly added</b> ( Lorem ipsum ) <small><b>Time:</b><em> 16.01.2025</em></small>
              </t-alert>
              <t-alert :closeable="true" color="indigo" radius="5">
                <b>Colorful notification</b>
              </t-alert>
              <t-alert :timer="3000" color="gray"  radius="5">
                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
              </t-alert>
              <component :is="'t-alert'" v-if="newAlert" :key="newAlertID" :timer="3000" color="gray"  radius="5">
                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
              </component>
              <t-button color="green" radius="8" @click.native="addAlertBox">Recall Closed Alert Box</t-button>
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
import TAlert from "@/components/Alert/Alert";
import TButton from "@/components/Button/Button";

export default {
  name: "Alerts",
  components: {TButton, MainLayout, GridSection, ContentCard, TAlert},
  data(){
    return {
      newAlert: false,
      newAlertID:1,
    }
  },
  methods : {
    addAlertBox(){
      this.newAlert = true;
      this.newAlertID++;
    }
  }
}
</script>

<style scoped>

</style>