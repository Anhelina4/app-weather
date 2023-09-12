import { AddCard } from 'components'
import { CityWeatherItem } from 'domains/Weather/components'

const CityWeatherList = () => {
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
  return (
    <div>
      <div className="flex gap-4 overflow-scroll pb-4 pt-6">
        <AddCard className="w-40">
          <div className="flex flex-col gap-4 items-center">
            <h5 className="text-center">World forecast</h5>
            <span className="caption2 text-center">
              Add the cities you are interested in
            </span>
          </div>
        </AddCard>

        {items?.map((item, index) => (
          <CityWeatherItem data={item} key={index} className="w-40" />
        ))}
      </div>
    </div>
  )
}

export default CityWeatherList
