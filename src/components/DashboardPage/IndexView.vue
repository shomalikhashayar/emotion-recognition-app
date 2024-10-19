<template>
  <q-card flat class="border-radius-xl bordered shadow">
    <q-card-section class="q-pt-lg q-px-lg">
      <q-item class="no-padding">
        <q-item-section avatar>
          <q-avatar round text-color="white" size="lg" color="primary">
            <q-icon name="sentiment_very_satisfied" size="24px" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-700 q-mb-xs">
            نمودار احساسات
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>

    <v-chart
      :style="$q.lang.rtl ? 'direction: ltr' : 'direction: rtl'"
      class="chart border-radius-inherit overflow-hidden"
      :option="option"
      autoresize
    />
  </q-card>
</template>

<script setup>
import { ref, provide, watch, onMounted } from "vue";
import { useQuasar } from "quasar";
import * as echarts from "echarts/core";
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import VChart, { THEME_KEY } from "vue-echarts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from "echarts/components";

use([
  SVGRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
]);

const $q = useQuasar();

provide(THEME_KEY, $q.dark.isActive ? "dark" : "light");

const option = ref(null);

const chartData = ref({
  labels: [
    "1401/05/10",
    "1401/05/11",
    "1401/05/12",
    "1401/05/13",
    "1401/05/14",
  ],
  series: [
    [30, 12, 9, 0, 43], // شادی
    [70, 102, 90, 40, 430], // غم
    [20, 2, 0, 7, 6], // نفرت
    [11, 17, 10, 10, 10], // خشم
    [8, 4, 23, 12, 9], // عشق
    [8, 3, 8, 1, 2], // ترس
  ],
});

// Change the color for شادی to green
const colors = [
  "#00943E", // شادی
  "#FF3F3F", // خشم
  "#FF8746", // غم
  "#FF8000", // ترس
  "#7940FF", // تعجب
  "#D8DE1D", // نفرت
];

function setOption() {
  option.value = {
    color: ["#00943E", "#FF3F3F", "#FF8746", "#FF8000", "#7940FF", "#D8DE1D"],
    tooltip: {
      textStyle: {
        color: $q.dark.isActive ? "white" : "black",
        fontFamily: "vazir-thin",
        fontSize: 14,
      },
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: $q.dark.isActive ? "white" : "black",
        fontFamily: "vazir-thin",
        fontSize: 14,
      },
      top: "0",
      data: ["نفرت", "تعجب", "ترس", "غم", "خشم", "شادی"],
    },
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "100px",
      containLabel: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: chartData.value.labels,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: chartData.value.series.map((data, index) => ({
      name: ["شادی", "خشم", "غم", "ترس", "تعجب", "نفرت"][index],
      type: "line",
      stack: "Total",
      lineStyle: {
        width: 2,
        color: colors[index % colors.length], // Color for the line
      },
      smooth: true,
      showSymbol: false,
      areaStyle: {
        opacity: 0.3,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: colors[index % colors.length],
          },
          {
            offset: 1,
            color: echarts.color.modifyAlpha(
              colors[index % colors.length],
              0.5
            ),
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: data,
    })),
  };
}

watch(() => {
  setOption();
});

onMounted(() => {
  setOption();
});
</script>

<style lang="scss" scoped>
.chart {
  height: 40vh;
}
</style>
