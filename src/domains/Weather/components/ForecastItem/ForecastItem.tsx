import { ReactNode, useMemo } from 'react'

import { Card } from 'components'
import moment from 'moment'

type ForecastDataType = {
  icon: ReactNode
  maxTemperature: number
  minTemperature: number
  date: Date
}
interface ForecastItemProps {
  data: ForecastDataType
  className?: string
}
const ForecastItem = (props: ForecastItemProps) => {
  const { data, className = '' } = props
  const { icon, maxTemperature, minTemperature, date } = data || {}

  const dayFormatted = useMemo(() => moment(date).format('DD'), [date])
  const monthFormatted = useMemo(() => moment(date).format('MMM'), [date])
  return (
    <Card
      className={`bg-gray-800 flex items-center justify-between p-4 ${className}`}>
      <div className="flex items-center">
        {icon}
        <div className="flex ml-8 items-baseline">
          <h2>{maxTemperature}&deg;</h2>
          <h5>/</h5>
          <h5>{minTemperature}&deg;</h5>
        </div>
      </div>
      <div className="flex items-baseline">
        <h4>{dayFormatted}</h4>
        &nbsp;
        <h6>{monthFormatted}</h6>
      </div>
    </Card>
  )
}

export default ForecastItem
