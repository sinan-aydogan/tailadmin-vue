<template>
  <main-layout>
    <template #header>
      Buttons
    </template>
    <template #subHeader>
      For all use
    </template>
    <template>
      <GridSection col="2" gap="2">
        <!--Simple Buttons : Code 1-->
        <ContentCard width="1">
          <template #title>
            Simple Buttons
          </template>
          <template #content>
            <div class="flex flex-row gap-2">
              <Button>Link</Button>
              <Button color="green">Download</Button>
              <Button color="yellow">Edit</Button>
              <Button color="red">Delete</Button>
            </div>
          </template>
          <template #secondContent>
            <highlightjs :code="sampleCodes.code1" language="html"/>
            <span class="border bg-gray-100 p-2 flex my-2">
            You can add a attribute which "color" for button color.
            <em class="ml-2"> Color variations: <b>red, blue, indigo, yellow, green, gray, black, white</b></em>
          </span>
          </template>
        </ContentCard>
        <!--Icon Buttons : Code 2-->
        <ContentCard width="1">
          <template #title>
            With Icon
          </template>
          <template #content>
            <div class="flex flex-row gap-2">
              <Button>
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
                Link
              </Button>
              <Button color="green">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
                Download
              </Button>
              <Button color="yellow">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
                Edit
              </Button>
              <Button color="red">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
                Delete
              </Button>
              <Button>
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </Button>
              <Button color="green">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </Button>
              <Button color="yellow">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </Button>
              <Button color="red">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </Button>
            </div>
          </template>
          <template #secondContent>
            <highlightjs :code="sampleCodes.code2" language="html"/>
          </template>
        </ContentCard>
        <!--With radius : Code 3-->
        <ContentCard width="1">
          <template #title>
            With radius
          </template>
          <template #content>
            <div class="flex flex-row gap-2">
              <Button radius="1">Link</Button>
              <Button color="green" radius="3">Download</Button>
              <Button color="yellow" radius="5">Edit</Button>
              <Button color="red" radius="8">Delete</Button>
            </div>
          </template>
          <template #secondContent>
            <highlightjs :code="sampleCodes.code3" language="html"/>
          </template>
        </ContentCard>
        <!--With Size : Code 4-->
        <ContentCard width="1">
          <template #title>
            With size
          </template>
          <template #content>
            <div class="flex gap-2">
                <Button color="green" size="full">Full Button</Button>
                <Button color="yellow" size="xl">XL Button</Button>
                <Button color="red" size="sm">Small Button</Button>
            </div>
          </template>
          <template #secondContent>
            <highlightjs :code="sampleCodes.code4" language="html"/>
          </template>
        </ContentCard>
      </GridSection>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import GridSection from "@/layouts/GridSection";
import Button from "@/components/Button/Button";
import ContentCard from "@/components/Card/ContentCard";
export default {
  name: "Buttons",
  components: {MainLayout,GridSection,Button,ContentCard},
  data(){
    return {
      sampleCodes : {
        code1: '<Button>Link</Button>\n' +
            '<Button color="green">Download</Button>\n' +
            '<Button color="yellow">Edit</Button>\n' +
            '<Button color="red">Delete</Button>',
        code2:'<Button>\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />\n' +
            '  </svg>\n' +
            '  Link\n' +
            '</Button>\n' +
            '<Button color="green">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />\n' +
            '  </svg>\n' +
            '  Download\n' +
            '</Button>\n' +
            '<Button color="yellow">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\n' +
            '  </svg>\n' +
            '  Edit\n' +
            '</Button>\n' +
            '<Button color="red">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\n' +
            '  </svg>\n' +
            '  Delete\n' +
            '</Button>\n' +
            '<Button>\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />\n' +
            '  </svg>\n' +
            '</Button>\n' +
            '<Button color="green">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />\n' +
            '  </svg>\n' +
            '</Button>\n' +
            '<Button color="yellow">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\n' +
            '  </svg>\n' +
            '</Button>\n' +
            '<Button color="red">\n' +
            '  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
            '    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\n' +
            '  </svg>\n' +
            '</Button>',
        code3: '<Button radius="1">Link</Button>\n' +
            '<Button radius="3" color="green">Download</Button>\n' +
            '<Button radius="5" color="yellow">Edit</Button>\n' +
            '<Button radius="8" color="red">Delete</Button>',
        code4: '<Button size="full" color="green">Full Button</Button>\n' +
            '<Button size="xl" color="yellow">XL Button</Button>\n' +
            '<Button size="sm" color="red">Small Button</Button>',
      }
    }
  }
}
</script>

<style scoped>

</style>