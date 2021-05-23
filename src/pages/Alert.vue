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
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <t-alert :border="true" :closeable="true" :radius="5" color="red">
                <font-awesome-icon slot="icon" icon="trash" size="lg"/><b>Successfuly deleted</b> ( Lorem ipsum ) <small><b>Time:</b><em> 03.09.2025</em></small>
              </t-alert>
              <t-alert :closeable="true" :radius="5" color="green">
                <font-awesome-icon slot="icon" icon="plus-circle" size="lg"/><b>Successfuly added</b> ( Lorem ipsum ) <small><b>Time:</b><em> 16.01.2025</em></small>
              </t-alert>
              <t-alert :closeable="true" :radius="5" color="indigo">
                <b>Colorful notification</b>
              </t-alert>
              <t-alert :radius="5" :timer="3000"  color="gray">
                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
              </t-alert>
              <component :is="'t-alert'" v-if="newAlert" :key="newAlertID" :timer="3000" color="gray"  radius="5">
                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
              </component>
              <t-button :radius="8" color="green" @click.native="addAlertBox">Recall Closed Alert Box</t-button>
            </div>
          </template>
        </content-card>
        <content-card width="3">
          <template #title>
            Toaster Alert
          </template>
          <template #content>
            <div class="flex flex-row gap-4">
              <component :is="'t-alert'" v-if="toasterPosition" :key="newToasterID" :closeable="true" :position="toasterPosition" color="indigo" radius="5">
                Hi, I'm a toaster notification
              </component>
              <t-button :radius="8" color="green" @click.native="toasterPosition='lt';toastAlert">Left-Top</t-button>
              <t-button :radius="8" color="green" @click.native="toasterPosition='lb';toastAlert">Left-Bottom</t-button>
              <t-button :radius="8" color="blue" @click.native="toasterPosition='rt';toastAlert">Right-Top</t-button>
              <t-button :radius="8" color="blue" @click.native="toasterPosition='rb';toastAlert">Right-Bottom</t-button>
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
      toasterPosition : null ,
      newToasterID:1
    }
  },
  methods : {
    addAlertBox(){
      this.newAlert = true;
      this.newAlertID++;
    },
    toastAlert(){
      this.newToasterID++;
    }
  }
}
</script>

<style scoped>

</style>