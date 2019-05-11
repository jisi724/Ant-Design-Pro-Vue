<template>
  <div style="height: 400px; position: relative; margin: auto;">
    <canvas ref="chartDom" style="height: 100px;"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    chartData(val) {
      this.chart.update(val);
    }
    // Deep Watch
    // chartData: {
    //   handler(val) {
    //     // this.chart.update(val);
    //     console.log(val)
    //   },
    //   deep: true
    // }
  },
  mounted() {
    this.renderChart();
  },
  beforeDestroy() {
    this.chart.destroy();
    this.chart = null;
  },
  methods: {
    renderChart() {
      this.chart = new Chart(this.$refs.chartDom, {
        type: "bar",
        data: this.chartData,
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  }
};
</script>
