<template>
  <!--Widget Main Container-->
  <ContentCard :color="color" :radius="radius">
    <template #content>
    <!--Widget Content-->
      <div class="flex flex-row">
        <!--Widget Data Area-->
        <div class="flex flex-col w-1/3">
          <!--Widget Title-->
          <div class="text-lg font-semibold">
            <slot name="title"/>
          </div>
          <!--Widget Value-->
          <div class="text-3xl font-bold py-2">125,25.58</div>
          <!--Diff Value-->
          <div
              :class="['text-sm ', diffClass]">
            <span v-text="diffDirection === 'up' ? '+' : '-'"></span>
            %3.3
            <font-awesome-icon v-if="diffDirection" :icon="'angle-'+diffDirection" />
          </div>
        </div>
        <!--Widget Chart Area-->
        <div v-if="chartType" class="flex flex-col w-2/3 h-28">
          <component
              :is="chartType"
              :chartdata="widget1.chartdata"
              :options="widget1.options"
              :styles="widget1.styles"/>
        </div>
      </div>
    </template>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/Card/ContentCard";
export default {
  name: "StaticWidget",
  components : {
    ContentCard,
    'bar-chart' : ()=>import('@/components/Chart/BarChart'),
    'line-chart' : ()=>import('@/components/Chart/LineChart'),
  },
  props : {
    radius: {
      required : false
    },
    color : {
      required: false
    },
    diffDirection : {
      required : false
    },
    chartType : {
      required : false,
      default : 'Bar'
    }
  },
  computed : {
    diffClass(){
      if(this.diffDirection === 'up'){
        return 'text-green-500';
      }else if(this.diffDirection === 'down'){
        return 'text-red-500'
      }else{
        return 'text-gray-600'
      }
    },
  },
  data(){
    return {
      widget1:{
        chartdata: {
          labels: ['January', 'February','April' , 'March' , 'June'],
          datasets: [
            {
              fill: false,
              tension: 0.1,
              borderColor : '#FFFE12',
              data: [40, 20, 15, 55, 41]
            },
            {
              label : '12',
              fill: false,
              tension: 0.1,
              borderColor : '#00FF',
              data: [5, 11, 52, 32, 15]
            },
          ]
        },
        options: {
          plugins : {
            legend : false,
          },
          elements : {
            point : {
              radius : 8,
              pointStyle: 'circle'
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 100
            }
          }
        },
        styles : {
          height : '100%'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>