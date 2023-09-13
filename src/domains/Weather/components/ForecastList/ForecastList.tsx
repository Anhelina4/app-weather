import { FogSun, MistCloud, Sun } from 'components'

import { ForecastItem } from 'domains/Weather/components'
import { SwitchOptions } from 'components/elements/Switch/Switch.type'
import { useMemo } from 'react'

interface ForecastListProps {
  options?: Array<SwitchOptions>
  chosenOption: string
}
const ForecastList = (props: ForecastListProps) => {
  const { chosenOption } = props
  const items = useMemo(
    () => [
      {
        icon: <Sun size="32px" className="fill-white" />,
        maxTemperature: 25,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <FogSun size="32px" className="fill-white" />,
        maxTemperature: 24,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <MistCloud size="32px" className="fill-white" />,
        maxTemperature: 24,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <Sun size="32px" className="fill-white" />,
        maxTemperature: 22,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <FogSun size="32px" className="fill-white" />,
        maxTemperature: 22,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <Sun size="32px" className="fill-white" />,
        maxTemperature: 21,
        minTemperature: 13,
        date: new Date()
      },
      {
        icon: <MistCloud size="32px" className="fill-white" />,
        maxTemperature: 21,
        minTemperature: 13,
        date: new Date()
      }
    ],
    []
  )

  const itemsToShow = useMemo(
    () => (chosenOption === '3d' ? items?.slice(0, 3) : items),
    [chosenOption, items]
  )

  return (
    <div className={'overflow-scroll h-min'}>
      {itemsToShow?.map((item, index) => (
        <ForecastItem
          data={item}
          key={`${index}-forecast-item`}
          className={index !== items?.length - 1 ? 'mb-2' : ''}
        />
      ))}
    </div>
  )
}

export default ForecastList
