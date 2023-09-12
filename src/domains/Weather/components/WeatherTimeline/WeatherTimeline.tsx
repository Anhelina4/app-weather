import { Card, Sun } from 'components'

import { TemperatureByTime } from 'domains/Weather/components'

const WeatherTimeline = () => {
  return (
    <Card>
      {/* first row */}
      <div className="flex items-center gap-6 md:gap-12 md:mb-8">
        <Sun size="80px" className="fill-white" />
        <div className="flex flex-col md:flex-row md:gap-16 w-full">
          <div className="flex gap-16 lg:mb-0 mb-8">
            <div className="flex flex-col">
              <span className="mb-1 h3 md:h1 inline-block">Berlin</span>
              <span className="h6 inline-block font-light">Germany</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 h3 sm:h1">+20&deg;</span>
              <span className="h6 inline-block font-light">Temperature</span>
            </div>
          </div>
          <div className="flex gap-16 lg:mb-0 mb-8">
            <div>
              <span className="flex items-baseline mb-1 h3 md:h1">
                24<h5>%</h5>
              </span>
              <span className="h6 inline-block font-light">Humidity</span>
            </div>
            <div>
              <span className="flex items-baseline mb-1 h3 sm:h1">
                13<h5>km/h</h5>
              </span>
              <span className="h6 inline-block font-light">Wind speed</span>
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
