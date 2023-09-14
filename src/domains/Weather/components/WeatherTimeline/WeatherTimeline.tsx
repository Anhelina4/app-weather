import { Card, Sun } from 'components'

import { TemperatureByTime } from 'domains/Weather/components'

const WeatherTimeline = () => {
  return (
    <Card className="h-full flex flex-col justify-between">
      {/* first row */}
      <div className="flex items-center gap-6 md:gap-12 md:mb-8">
        <Sun size="100px" className="fill-white" />
        {/* small screen */}
        <div className="flex flex-col md:hidden">
          <div className="inline-block mb-1 ">
            <span className="h6 mr-2">Berlin,</span>
            <span className="h6">Germany</span>
          </div>
          <div className="inline-block mb-1">
            <span className=" text-gray-300 caption1 mr-2">Temperature:</span>
            <span>+20&deg;</span>
          </div>
          <div className="inline-block mb-1">
            <span className="mb-1 text-gray-300 caption1 mr-2">Humidity:</span>
            <span className="mb-1 h6">34%</span>
          </div>
          <div className="inline-block">
            <span className="text-gray-300 caption1 mr-2">Wind speed:</span>
            <span className="h6">13km/h</span>
          </div>
        </div>
        {/* md and bigger screen */}
        <div className="hidden md:flex md:flex-row md:gap-12 md:flex-wrap w-full justify-between">
          <div>
            <span className="flex mb-1 h1">Berlin</span>
            <span className="caption1 inline-block font-light">Germany</span>
          </div>
          <div>
            <span className="flex mb-1 h1">+20&deg;</span>
            <span className="caption1 inline-block font-light">
              Temperature
            </span>
          </div>
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
            <span className="caption1 inline-block font-light">Wind speed</span>
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
