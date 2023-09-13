import { useMemo, useState } from 'react'

import { Switch } from 'components'

const options = [
  { name: 'C°', key: 'CELCIUS', value: 'CELCIUS' },
  { name: 'F°', key: 'FAHRENHEIT', value: 'FAHRENHEIT' }
]

const MeasureSwitch = () => {
  const [checked, setChecked] = useState(false)

  const chosenOption = useMemo(
    () => (checked ? options[1].name : options[0].name),
    [checked]
  )

  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      options={options}
      chosenOption={chosenOption}
    />
  )
}

export default MeasureSwitch
