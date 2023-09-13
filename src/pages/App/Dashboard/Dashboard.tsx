import {
  CityWeatherList,
  Forecast,
  WeatherTimeline
} from 'domains/Weather/components'

import { Card } from 'components'

const Dashboard = () => {
  return (
    <div className="container">
      <div
        className="grid grid-cols-1 gap-y-4 grid-rows-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 grid-flow-col mb-4"
        style={{ gridTemplateRows: 'repeat(2, minmax(0, 320px))' }}>
        <div className="col-span-2">
          <WeatherTimeline />
        </div>
        <Card className="col-span-2">
          Metrics chart by current or choosen location
        </Card>
        <Card className="col-span-1">Map</Card>
        <div className="col-span-1">
          <Forecast />
        </div>
      </div>
      <div className="flex overflow-scroll">
        <CityWeatherList />
      </div>
    </div>
  )
}

export default Dashboard
