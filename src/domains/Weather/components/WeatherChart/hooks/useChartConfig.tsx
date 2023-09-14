const useChartConfig = () => {
  const options = {
    chart: {
      id: 'basic-bar'
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
      data: [30, 40, 40, 40, 40, 45, 50, 49, 60, 70, 91, 100]
    }
  ]
  const config = { options, series }
  return config
}

export default useChartConfig
