import { Input } from 'components'

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
