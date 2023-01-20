/* global Module */
/* Magic Mirror
 * Module: MMM-ApexCharts
 *
 * By sharmstr https://github.com/sharmstr/
 * MIT Licensed.
 */

Module.register("MMM-ApexCharts", {
  defaults: {
    chartBackground       : 'transparent', //overrides gray background produced when theme mode is set to dark
    chartDataLabels       : true,
    chartHeight           : 400,
    chartID               : 1, //allows for multiple charts
    chartJsonUrl          : null,
    chartMonochrome       : true, //works best with default MM css
    chartMonochromeColor  : '#999999', //works best with default MM css
    chartThemeMode        : 'dark', //works best with default MM css
    chartWidth            : 400, 
    chartConfig           : {}   
  },

  getScripts: function() {
    return ["modules/" + this.name + "/node_modules/apexcharts/dist/apexcharts.min.js"]; 
  },

  start: function() {
    this.config = Object.assign({}, this.defaults, this.config);
    Log.info("Starting module: " + this.name);

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
        
        var chart = new ApexCharts(document.getElementById("ApexCharts_" + this.config.chartID), this.config.chartConfig);
        chart.render(); 
        chart.updateOptions({
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
          Log.info("Should get json: " + this.config.chartJsonUrl);
          fetch(this.config.chartJsonUrl)
          .then((response) => response.json())
          .then((data) => {
            chart.updateSeries([{
              name: 'Sales',
              data: data
            }])
           
          });
        }    

        break
    }
  },

 
  
});