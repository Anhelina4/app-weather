import { Card, Switch } from 'components'
import { useMemo, useState } from 'react'

import { ForecastList } from 'domains/Weather/components'

const options = [
  { name: '3d', key: '3_DAYS', value: '3_DAYS' },
  { name: '7d', key: '7_DAYS', value: '7_DAYS' }
]
const Forecast = () => {
  const [checked, setChecked] = useState(false)

  const chosenOption = useMemo(
    () => (checked ? options[1].name : options[0].name),
    [checked]
  )
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-light">Forecast</h1>
        <Switch
          checked={checked}
          onChange={setChecked}
          options={options}
          className="bg-gray-800"
          chosenOption={chosenOption}
        />
      </div>
      <ForecastList chosenOption={chosenOption} />
    </Card>
  )
}

export default Forecast
