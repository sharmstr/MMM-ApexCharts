
# MMM-ApexCharts
Chart module using [ApexCharts.js](https://apexcharts.com/) for [MagicMirror²](https://github.com/MichMich/MagicMirror).

Chart data can be supplied in config or pulled from JSON api.  Currently the data is only retrieved once.  I'll be adding interval update soon.

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
| chartInterval      | How often to update JSON chart data in milliseconds.     | ```null```     |
| chartJsonSeriesFormat       | JSON format of chart data. paired, stacked or pie     | ```paired```     |
| chartJsonUrl       | URL to fetch JSON data.      | ```null```     |
| chartMonochrome       | Use monochrome color palette.      | ```true```     |
| chartMonochromeColor       | Base color for generating shades.      | ```#534F4F```     |
| chartThemeMode       | Color theme.  Dark or Light.      | ```dark```     |
| chartWidth       | Chart width in px.      | ```400```     |
| chartConfig | ApexChart.js config. More info at [apexcharts.js](https://apexcharts.com/) | ```{}``` |

## Usage Notes

If the chartInterval option is not set in your config, the chart will only fetch the JSON data at startup.

## Examples

There are several examples in the wiki

## Screenshots

Pie chart:

![](.github/sampleA.png)

Same pie chart with custom options:

![](.github/sampleB.png)

Bar chart with default options:

![](.github/sampleC.png)

Multiple charts on mirror: 

![](.github/sampleMultiple.png)

