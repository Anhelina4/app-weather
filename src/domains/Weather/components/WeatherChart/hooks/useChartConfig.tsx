const useChartConfig = () => {
  const options = {
    chart: {
      id: 'weather-bar'
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['rgb(186, 230, 253, 1)'],
      width: 3,
      dashArray: 0
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1
      }
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  }
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 40, 40, 40, 45, 50, 49, 60, 70, 91, 150]
    }
  ]
  const config = { options, series }
  return config
}

export default useChartConfig
