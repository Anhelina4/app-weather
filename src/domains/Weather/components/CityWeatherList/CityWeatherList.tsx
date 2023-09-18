import { AddCard } from 'components'
import { CityWeatherItem } from 'domains/Weather/components'

interface CityWeatherListProps {
  flexWrap?: boolean
}

const CityWeatherList = (props: CityWeatherListProps) => {
  const { flexWrap = false } = props
  const items = [
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    },
    {
      city: 'Lisbon',
      country: 'Portugal',
      minTemperature: 15,
      maxTemperature: 24
    }
  ]

  const containerWrap = flexWrap ? 'flex-wrap' : 'overflow-scroll'
  const itemMarginTop = flexWrap ? 'mt-4' : 'mt-6'

  return (
    <div>
      <div className={`flex gap-4 ${containerWrap} pb-4`}>
        <div className={itemMarginTop}>
          <AddCard className={`w-40`}>
            <div className="flex flex-col gap-4 items-center">
              <h5 className="text-center">World forecast</h5>
              <span className="caption2 text-center">
                Add the cities you are interested in
              </span>
            </div>
          </AddCard>
        </div>

        {items?.map((item, index) => (
          <div className={`${itemMarginTop} `} key={index}>
            <CityWeatherItem data={item} className={`w-40 h-full`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityWeatherList
