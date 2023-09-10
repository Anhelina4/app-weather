import { Card } from 'components'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 grid-flow-col">
        <Card className="col-span-2 row-span-1">
          Weather by current or choosen location
        </Card>
        <Card className="col-span-2 row-span-1">
          Metrics chart by current or choosen location
        </Card>
        <Card className="col-span-2 row-span-1">
          Weather in interested in cities
        </Card>
        <Card>Map</Card>
        <Card className="row-span-2">Forecast</Card>
      </div>
    </div>
  )
}

export default Dashboard
