import { Card } from 'components'
import { Fragment } from 'react'
import snowCloudSun from '__assets__/snow-cloud-sun.svg'
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
            <div className="flex flex-col gap-2">
              <h6 className="text-gray-800">{item.time}</h6>
              <img src={snowCloudSun} />
              <span className="text-gray-800 caption">
                {item.temperature}&deg;
              </span>
            </div>
          </Card>
        )
      })}
    </Fragment>
  )
}

export default TemperatureByTime
