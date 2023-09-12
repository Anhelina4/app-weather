import { Card, Sun } from 'components'

import { TemperatureByTime } from 'domains/Weather/components'

const WeatherTimeline = () => {
  return (
    <Card className="col-span-2 row-span-1">
      {/* first row */}
      <div className="flex gap-6 md:gap-12 md:mb-8">
        <Sun size="80px" className="fill-white" />
        <div className="flex flex-col md:flex-row md:gap-8 w-full">
          <div className="flex gap-8 lg:mb-0 mb-8">
            <div className="flex flex-col">
              <span className="mb-1 h3 md:h1 inline-block">Berlin</span>
              <span className="h5 inline-block">Germany</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 h3 sm:h1">+20&deg;</span>
              <span className="h5 inline-block">Temperature</span>
            </div>
          </div>
          <div className="flex gap-8 lg:mb-0 mb-8">
            <div>
              <span className="flex items-baseline mb-1 h3 md:h1">
                24<h5>%</h5>
              </span>
              <span className="h5 inline-block">Humidity</span>
            </div>
            <div>
              <span className="flex items-baseline mb-1 h3 sm:h1">
                13<h5>km/h</h5>
              </span>
              <span className="h6 h5 inline-block">Wind speed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-baseline"></div>
      <div className="flex overflow-scroll pb-4 shadow-inner">
        <TemperatureByTime />
      </div>
    </Card>
  )
}

export default WeatherTimeline
