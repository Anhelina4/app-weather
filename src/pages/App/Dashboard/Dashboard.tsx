import {
  CityWeatherList,
  Forecast,
  WeatherChart,
  WeatherTimeline
} from 'domains/Weather/components'

import { Card } from 'components'
import { MEDIA_SIZES } from '__constants__'
import { useScreen } from 'hooks'

const Dashboard = () => {
  const currentMedia = useScreen()

  const SmOrMdScreen =
    MEDIA_SIZES.SM === currentMedia || MEDIA_SIZES.MD === currentMedia

  return (
    <div className="container">
      <div
        className="grid grid-flow-col grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-4 
        lg:mb-4 lg:grid-flow-row 2xl:grid-cols-4"
        style={{
          gridTemplateRows: SmOrMdScreen
            ? 'repeat(4, minmax(min-content, 320px))'
            : 'repeat(2, minmax(min-content, 320px))'
        }}>
        <div className="2xl:col-span-2">
          <WeatherTimeline />
        </div>
        <div className="2xl:col-span-2">
          <Forecast />
        </div>
        <div className="2xl:col-span-2">
          <WeatherChart />
        </div>
        <Card className="2xl:col-span-2">Map</Card>
      </div>
      <div className="col-span-1 flex overflow-scroll">
        <CityWeatherList />
      </div>
    </div>
  )
}

export default Dashboard
