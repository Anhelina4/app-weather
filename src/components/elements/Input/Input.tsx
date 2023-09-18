interface InputProps {
  label?: string
  inputId?: string
  inputName?: string
  placeholder?: string
  type?: string
  autoComplete?: string
  required?: boolean
}

const Input = (props: InputProps) => {
  const {
    label,
    inputId,
    inputName,
    placeholder,
    type = 'text',
    autoComplete = '',
    required = false
  } = props
  return (
    <div className="flex-1">
      {label && (
        <label htmlFor={label} className="block text-sm font-medium leading-8">
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          name={inputName}
          id={inputId}
          autoComplete={autoComplete}
          required={required}
          className="block w-full border-0 py-1.5 px-4   ring-inset 
ring-gray-300 focus:ring-1 focus:ring-inset bg-gray-700
focus:ring-white sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input
