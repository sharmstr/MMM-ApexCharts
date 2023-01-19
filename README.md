# MMM-ApexCharts
Chart module for ApexCharts.js running on [MagicMirror²](https://github.com/MichMich/MagicMirror). This is a simple wrapper for [ApexCharts.js](https://apexcharts.com/)

## Screenshot
![](.github/example.png)

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

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-ApexCharts',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following property can be configured:

| Option      | Description             | Default value |
| ------------|-------------------------|:-------------:|
| width       | Chart width in px.      | ```200```     |
| height      | Chart height in px.     | ```200```     |
| chartConfig | ApexChart.js config. More info at [apexcharts.js](https://apexcharts.com/) | ```{}``` |

