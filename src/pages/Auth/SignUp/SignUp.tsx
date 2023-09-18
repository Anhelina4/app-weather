import { Input } from 'components'

const SignUp = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input
              label="Name"
              inputId="name"
              inputName="name"
              placeholder="Enter your name"
              required
            />
            <Input
              label="Surname"
              inputId="surname"
              inputName="surname"
              placeholder="Enter your surname"
              required
            />
            <Input
              label="Email"
              inputId="email"
              inputName="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              inputId="password"
              inputName="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-300 px-3 py-1.5 
                text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-sky-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-sky-600">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
