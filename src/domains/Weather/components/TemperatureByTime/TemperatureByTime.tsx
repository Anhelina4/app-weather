import { Card, SnowCloudSun } from 'components'

import { Fragment } from 'react'

const TemperatureByTime = () => {
  const temperatureByTime = [
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 },
    { time: '11:00', temperature: 24 }
  ]
  return (
    <Fragment>
      {temperatureByTime?.map((item, index) => {
        return (
          <Card
            className="bg-sky-200 mr-1 rounded-3xl"
            key={`${index}-temperature-by-time`}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-800 caption">{item.time}</span>
              <SnowCloudSun size="32px" className="fill-gray-800" />
              <h6 className="text-gray-800 caption font-bold">
                {item.temperature}&deg;
              </h6>
            </div>
          </Card>
        )
      })}
    </Fragment>
  )
}

export default TemperatureByTime
