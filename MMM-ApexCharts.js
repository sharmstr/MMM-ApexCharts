/* global Module */
/* Magic Mirror
 * Module: MMM-ApexCharts
 *
 * By sharmstr https://github.com/sharmstr/
 * MIT Licensed.
 * 
 * v1 - Initial Release
 * v2 - Better JSON support
 * 
 */

Module.register("MMM-ApexCharts", {
  defaults: {
    chartBackground       : 'transparent', //overrides gray background produced when theme mode is set to dark
    chartDataLabels       : true,
    chartHeight           : 400,
    chartID               : 1, //allows for multiple charts
    chartInterval         : null, 
    chartAnimationSpeed   : 1000,
    // format of chart data: paired, pie
    // for more info, see apexchart docs:  https://apexcharts.com/docs/series/
    chartJsonSeriesFormat : 'paired',
    chartJsonUrl          : null,
    chartMonochrome       : true, //works best with default MM css
    chartMonochromeColor  : '#534F4F', //works best with default MM css
    chartThemeMode        : 'dark', //works best with default MM css
    chartWidth            : 400, 
    chartConfig           : {}   
  },

  requiresVersion: "2.1.0", // Required version of MagicMirror

  getScripts: function() {
    return ["modules/" + this.name + "/node_modules/apexcharts/dist/apexcharts.min.js"]; 
  },

  start: function() {
    this.config = Object.assign({}, this.defaults, this.config);
    Log.info("Starting module: " + this.name);

    if (this.config.chartInterval && this.config.chartJsonUrl) {
      setInterval(() => {
        this.updateChart();
      }, this.config.chartInterval);
    }  

  },

  getDom: function() {
    var self = this;
    self.wrapper = document.createElement("div");
    self.wrapper.id = "ApexCharts_" + this.config.chartID;
    self.wrapper.setAttribute("style", "position: relative; display: inline-block;");
    return self.wrapper;
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":   
      
        this.buildChart();
        break;
    }
  },

  buildChart: function() {      
    this.chart = new ApexCharts(document.getElementById("ApexCharts_" + this.config.chartID), this.config.chartConfig);
    this.chart.render(); 
    this.chart.updateOptions({
      chart: {
        background: this.config.chartBackground,
        height: this.config.chartHeight,
        width: this.config.chartWidth
      },
      theme: {
        mode: this.config.chartThemeMode,
        monochrome: {
          enabled: this.config.chartMonochrome,
          color: this.config.chartMonochromeColor
        }
      },
      dataLabels: {
        enabled: this.config.chartDataLabels
      }
    })  

    if (this.config.chartJsonUrl) {
      this.updateChart();
    }
  },

  updateChart: function() {   
    Log.info("Fetching JSON: " + this.config.chartJsonUrl);
    fetch(this.config.chartJsonUrl)
    .then((response) => response.json())
    .then((data) => {
      switch(this.config.chartJsonSeriesFormat) {
        case 'paired':
          this.chart.updateSeries([{
            name: '',
            data: data
          }])
          break;

        case 'pie':
          this.chart.updateOptions({
            series: data.series,
            labels: data.labels
          })
          break;

        default:
          this.chart.updateSeries([{
            name: '',
            data: data
          }])
          break;
      }          
      
    });
  }  
});