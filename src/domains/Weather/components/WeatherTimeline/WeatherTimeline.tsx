import { Card } from 'components'
import { TemperatureByTime } from 'domains/Weather/components'
import sun from '__assets__/sun.svg'

const WeatherTimeline = () => {
  return (
    <Card className="col-span-2 row-span-1">
      {/* first row */}
      <div className="flex justify-between align-center mb-8">
        <div className="flex align-center justify-center gap-16">
          <img src={sun} height="80px" width="80px" />
          <div>
            <h1 className="mb-1">Berlin</h1>
            <h5>Germany</h5>
          </div>
        </div>
        <div>
          <h1 className="mb-1">+20&deg;</h1>
          <h5>Temperature</h5>
        </div>
        <div>
          <h1 className="flex items-baseline mb-1">
            24<h5>%</h5>
          </h1>
          <h5>Humidity</h5>
        </div>
        <div>
          <h1 className="flex items-baseline mb-1">
            13<h5>km/h</h5>
          </h1>
          <h5>Wind speed</h5>
        </div>
      </div>
      <div className="flex items-baseline"></div>
      <div className="flex overflow-scroll pb-4">
        <TemperatureByTime />
      </div>
    </Card>
  )
}

export default WeatherTimeline
