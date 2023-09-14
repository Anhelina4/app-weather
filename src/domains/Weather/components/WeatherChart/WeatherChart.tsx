import ReactApexChart from 'react-apexcharts'
import { useChartConfig } from './hooks'

const WeatherChart = () => {
  const config = useChartConfig()
  return (
    <div className="w-full overflow-y-scroll">
      <ReactApexChart
        options={config.options}
        series={config.series}
        type="line"
      />
    </div>
  )
}

export default WeatherChart
