<template>
  <q-card flat class="border-radius-xl bordered shadow">
    <q-card-section class="q-pt-lg q-pb-none q-px-lg">
      <q-item class="no-padding">
        <q-item-section avatar>
          <q-avatar round text-color="white" size="lg" color="primary">
            <q-icon name="sentiment_very_satisfied" size="24px" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-size-21 text-weight-700 q-mb-xs">
            نمودار احساسات
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>

    <v-chart
      :style="$q.lang.rtl ? 'direction: ltr' : ''"
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
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  series: [
    [30, 12, 9, 80, 43, 12, 6, 0, 7, 2, 20, 81], // شادی
    [11, 17, 10, 11, 17, 10, 10, 20, 10, 10, 50, 3], // خشم
    [40, 12, 9, 40, 10, 0, 12, 90, 40, 4, 9, 22], // غم
    [40, 12, 0, 0, 10, 4, 80, 3, 8, 1, 20, 9], // ترس
    [80, 3, 8, 1, 20, 42, 2, 21, 2, 10, 12, 12], // تعجب
    [20, 20, 40, 7, 6, 2, 3, 0, 29, 11, 1, 80], // نفرت
  ],
});

const colors = [
  "#00943E", // شادی
  "#FF3F3F", // خشم
  "#FF8746", // غم
  "#575757", // ترس
  "#7940FF", // تعجب
  "#D8DE1D", // نفرت
];

function setOption() {
  option.value = {
    color: ["#00943E", "#FF3F3F", "#FF8746", "#575757", "#7940FF", "#D8DE1D"],
    tooltip: {
      extraCssText:
        "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); border-radius:12px;",
      icon: "roundRect",
      backgroundColor: $q.dark.isActive ? "var(--q-dark)" : "white",
      className: "tooltip",
      padding: 12,
      textStyle: {
        color: $q.dark.isActive ? "white" : "black",
        fontFamily: "vazir-thin",
        fontSize: 16,
        align: $q.lang.rtl ? "right" : "left",
      },
      axisPointer: {
        lineStyle: {
          color: $q.dark.isActive ? "#ffffff27" : "#00000027",
          width: 2,
        },
      },
      trigger: "axis",
      formatter: getFormatter(),
    },
    legend: {
      textStyle: {
        color: $q.dark.isActive ? "white" : "black",
        fontFamily: "vazir-thin",
        fontSize: 16,
      },
      icon: "circle",
      itemWidth: 12,
      itemGap: 32,
      top: "0",
      data: ["نفرت", "تعجب", "ترس", "غم", "خشم", "شادی"],
    },
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      containLabel: false,
    },
    xAxis: [
      {
        show: false,
        type: "category",
        boundaryGap: false,
        data: chartData.value.labels,
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: chartData.value.series.map((data, index) => ({
      name: ["شادی", "خشم", "غم", "ترس", "تعجب", "نفرت"][index],
      type: "line",
      lineStyle: {
        width: 3,
        color: colors[index % colors.length],
      },
      symbolSize: 12,
      symbol: $q.dark.isActive ? "circle" : "emptyCircle",
      smooth: true,
      showSymbol: false,
      areaStyle: {
        opacity: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: colors[index % colors.length],
          },
          {
            offset: 1,
            color: echarts.color.modifyAlpha(
              colors[index % colors.length],
              0.1
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

const ltrFormatter = (params) => {
  const header = params[0].name;
  const seriesData = params
    .map((item) => {
      return `<div style="margin-bottom: 8px; display: flex; align-items: center;">
                ${item.marker}
                <span class="text-weight-300" style="margin-left: 8px;">${item.seriesName}</span>: 
                <span class="text-bold" style="margin-left: 4px;">${item.data}</span>
              </div>`;
    })
    .join("");

  return `
    <div style="min-width: 150px;">
      <strong style="display: block; padding-bottom: 12px;">${header}</strong>
      <div class="text-weight-300">${seriesData}</div>
    </div>
  `;
};

const rtlFormatter = (params) => {
  const header = params[0].name;
  const seriesData = params
    .map((item) => {
      return `<div style="margin-bottom: 8px; display: flex; align-items: center; direction: rtl;">
               ${item.marker} <span class="text-weight-300" style="margin-right: 8px;">${item.seriesName}</span>: 
                <span class="text-bold" style="margin-right: 4px;">${item.data}</span>
              </div>`;
    })
    .join("");

  return `
    <div style="min-width: 150px;">
      <strong style="display: block; padding-bottom: 12px; direction: rtl;">${header}</strong>
      <div class="text-weight-300" style="direction: rtl;">${seriesData}</div>
    </div>
  `;
};

const getFormatter = () => {
  return $q.lang.rtl ? rtlFormatter : ltrFormatter;
};

watch(() => {
  setOption();
});

onMounted(() => {
  setOption();
});
</script>

<style lang="scss">
.chart {
  height: 45vh;
}
</style>
