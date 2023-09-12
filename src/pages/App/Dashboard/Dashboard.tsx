import { Card } from 'components'
import { WeatherTimeline } from 'domains/Weather/components'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-y-4 grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 grid-flow-col">
        <WeatherTimeline />
        <Card className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 ">
          Metrics chart by current or choosen location
        </Card>
        <Card className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-1">
          Weather in interested in cities
        </Card>
        <Card>Map</Card>
        <Card className="col-span-1 row-span-1 lg:row-span-2">Forecast</Card>
      </div>
    </div>
  )
}

export default Dashboard
