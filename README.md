
# MMM-ApexCharts
Chart module using [ApexCharts.js](https://apexcharts.com/) for [MagicMirror²](https://github.com/MichMich/MagicMirror).

##

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/sharmst/MMM-ApexCharts.git
````

Install dependencies:
````
cd ~/MagicMirror/modules/MMM-ApexCharts
````

````
npm install
````

Configure the module in your `config.js` file.

## Usage

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
{
  module: 'MMM-ApexCharts',
	config: {
	    // See 'Configuration options' for more information.
	}
}
````

## Configuration options

The following options can be configured:

| Option      | Description             | Default value |
| ------------|-------------------------|:-------------:|
| chartBackground       | Chart background color.      | ```transparent```     |
| chartDataLabels       | Display data lables.      | ```true```     |
| chartHeight      | Chart height in px.     | ```400```     |
| chartID      | ID assigned to chart. Allows for multiple charts.     | ```1```     |
| chartMonochrome       | Use monochrome color palette.      | ```true```     |
| chartMonochromeColor       | Base color for generating shades.      | ```#534F4F```     |
| chartThemeMode       | Color theme.  Dark or Light.      | ```dark```     |
| chartWidth       | Chart width in px.      | ```400```     |
| chartConfig | ApexChart.js config. More info at [apexcharts.js](https://apexcharts.com/) | ```{}``` |

## Examples

Pie chart with default options:
````javascript
{
  module: "MMM-ApexCharts",
  position: "top_center",
  header: "Sample Chart A",
  config: {
    chartConfig: {
    chart: {
      type: 'pie'
    },
    series: [44, 55, 13, 43, 22],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
     }
  }
}
````
![](.github/sampleA.png)

Same pie chart with custom options:
````javascript
{
  module: "MMM-ApexCharts",
  position: "top_center",
  header: "Sample Chart B",
  config: {
    chartConfig: {
    chart: {
      type: 'pie'
    },
    series: [44, 55, 13, 43, 22],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
     }
  }
}
````
![](.github/sampleB.png)