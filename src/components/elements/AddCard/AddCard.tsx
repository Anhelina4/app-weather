import { Plus } from 'components'
import { ReactNode } from 'react'

interface AddCardProps {
  children?: ReactNode
  className?: string
}

const AddCard = (props: AddCardProps) => {
  const { children, className = '' } = props
  return (
    <div className={`relative ${className}`}>
      <div
        className="cursor-pointer rounded-full bg-sky-200 hover:bg-sky-300 absolute -top-4 p-2"
        style={{ left: '60px' }}>
        <Plus size="24px" className="stroke-gray-800" />
      </div>
      <div
        className={`p-5 pt-8 border-dashed border-gray-500 border-2 cursor-pointer hover:bg-gray-700 h-full ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default AddCard
