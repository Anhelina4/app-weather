import { Input, User } from 'components'

import { CityWeatherList } from 'domains/Weather/components'

const Profile = () => {
  return (
    <>
      <div className="lg:w-3/6">
        <User size="160px" />
        <div className="flex items-center gap-4 mb-4 columns-2">
          <Input
            label="Name"
            inputId="name"
            inputName="name"
            placeholder="Enter your name"
          />
          <Input
            label="Surname"
            inputId="surname"
            inputName="surname"
            placeholder="Enter your surname"
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Input
            label="Email"
            inputId="email"
            inputName="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Input
            label="Password"
            inputId="password"
            inputName="password"
            placeholder="Enter your new password"
          />
        </div>
      </div>
      <div>
        <h4 className="mb-4">Your favorite cities</h4>
        <CityWeatherList flexWrap />
      </div>
    </>
  )
}

export default Profile
