import { Switch } from '@headlessui/react'
import { SwitchOptions } from './Switch.type'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  options?: Array<SwitchOptions>
  className?: string
  chosenOption: string
}

const Switcher = (props: SwitchProps) => {
  const { checked, onChange, options, className = '', chosenOption } = props

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${checked ? 'bg-gray-700' : 'bg-gray-700'}
    relative  inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer 
    rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out 
    focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 ${className}`}>
      <span
        aria-hidden="true"
        className={`${checked ? 'translate-x-9' : 'translate-x-0'}
      pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full
       bg-gray-500 shadow-lg ring-0 transition duration-200 ease-in-out`}>
        {options && <span className="mt-1 inline-block">{chosenOption}</span>}
      </span>
    </Switch>
  )
}

export default Switcher
