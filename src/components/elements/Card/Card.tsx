import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  className?: string
}

const Card = (props: CardProps) => {
  const { children, className = '' } = props
  return (
    <div className={`p-5 bg-gray-700 rounded-md ${className}`}>{children}</div>
  )
}

export default Card
