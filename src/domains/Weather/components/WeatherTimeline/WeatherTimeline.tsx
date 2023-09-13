import { Card, Sun } from 'components'

import { TemperatureByTime } from 'domains/Weather/components'

const WeatherTimeline = () => {
  return (
    <Card className="h-full flex flex-col justify-between">
      {/* first row */}
      <div className="flex items-center gap-6 md:gap-12 md:mb-8">
        <Sun size="100px" className="fill-white" />
        <div className="flex flex-col md:flex-row md:gap-12 w-full">
          <div className="flex gap-12 mb-8  md:mb-0 ">
            <div className="flex flex-col">
              <span className="mb-1 h1 inline-block">Berlin</span>
              <span className="caption1 inline-block font-light">Germany</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 h1">+20&deg;</span>
              <span className="caption1 inline-block font-light">
                Temperature
              </span>
            </div>
          </div>
          <div className="flex gap-12 mb-8 md:mb-0 ">
            <div>
              <span className="flex items-baseline mb-1 h1">
                24<h5>%</h5>
              </span>
              <span className="caption1 inline-block font-light">Humidity</span>
            </div>
            <div>
              <span className="flex items-baseline mb-1 h1">
                13<h5>km/h</h5>
              </span>
              <span className="caption1 inline-block font-light">
                Wind speed
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="flex overflow-scroll pb-4 shadow-inner">
        <TemperatureByTime />
      </div>
    </Card>
  )
}

export default WeatherTimeline
