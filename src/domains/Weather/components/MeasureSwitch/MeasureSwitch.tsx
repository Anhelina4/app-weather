import { Switch } from '@headlessui/react'
import { useState } from 'react'
const options = { CELCIUS: 'C°', FAHRENHEIT: 'F°' }

const MeasureSwitch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-gray-700' : 'bg-gray-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer 
          rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out 
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full
             bg-gray-500 shadow-lg ring-0 transition duration-200 ease-in-out`}>
          <span className="mt-1 inline-block">
            {enabled ? options.FAHRENHEIT : options.CELCIUS}
          </span>
        </span>
      </Switch>
    </div>
  )
}

export default MeasureSwitch
