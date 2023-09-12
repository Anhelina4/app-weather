import { Card, FogSun } from 'components'

import { CityWeather } from './CityWeatherItem.type'

interface CityWeatherItemProps {
  data: CityWeather
  className?: string
}
const CityWeatherItem = (props: CityWeatherItemProps) => {
  const { data, className = '' } = props
  const { city, country, minTemperature, maxTemperature } = data || {}

  return (
    <div className="relative">
      <div
        className="rounded-full bg-sky-200 absolute -top-4 p-2"
        style={{ left: '60px' }}>
        <FogSun size="24px" className="stroke-gray-800" />
      </div>

      <Card className={`h-full pt-8 ${className}`}>
        <div className="flex flex-col items-center">
          <h5>{city}</h5>
          <span className="caption2 text-center font-light">{country}</span>
        </div>
        <div className="flex items-baseline justify-center mt-6">
          <h3>{maxTemperature}&deg;</h3>
          <span className="caption1">/</span>
          <span className="caption1">{minTemperature}&deg;</span>
        </div>
      </Card>
    </div>
  )
}

export default CityWeatherItem
