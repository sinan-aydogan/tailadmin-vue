<template>
      <GridSection col="1" gap="2">
        <content-card color="red" width="1">
          <template #content>
            Login
          </template>
        </content-card>
      </GridSection>
</template>

<script>
import ContentCard from "@/components/Card/ContentCard";
import GridSection from "@/layouts/GridSection";
export default {
  name: "Login",
  components : {
    ContentCard,
    GridSection
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>

</style>