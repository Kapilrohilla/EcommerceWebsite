import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const handleChangeFormType = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex flex-row h-lvh gap-0">
      <img
        src="/images/logo.png"
        alt="logo"
        className="absolute h-10 top-5 left-10 object-contain"
      />
      <div className="flex-1 h-full">
        <img
          src="/images/loginwomen.png"
          alt="loginwomen"
          className="flex-1 object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 flex flex-row h-full items-center px-10 ">
        <div className="w-full lg:mr-28">
          {isLogin ? (
            <div className="flex flex-col gap-7 w-full">
              <div>
                <h1 className="text-3xl font-bold">Welcome👋</h1>
                <p className="text-base text-cgrey font-base">
                  Please login here
                </p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Password
                  </label>
                  <input
                    type="email"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="checkbox"
                      name="remember me"
                      id="remember"
                      className="h-5 w-5 accent-black rounded-md"
                    />
                    <label htmlFor="remember" className="text-base">
                      Remember Me
                    </label>
                  </div>
                  <span className="text-base">Forgot Password ?</span>
                </div>
                <button className="bg-black w-full text-center text-white h-14 rounded-md font-semibold">
                  Login
                </button>
                <p className="text-center" onClick={handleChangeFormType}>
                  Don't have an account ?
                </p>
              </form>
            </div>
          ) : (
            //   </div>
            //   <div className="w-full lg:mr-28">
            <div className="flex flex-col gap-7 w-full">
              <div>
                <h1 className="text-3xl font-bold">Create New Account</h1>
                <p className="text-base text-cgrey font-base">
                  Please enter details
                </p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                  />
                </div>
                <button className="bg-black w-full text-center text-white h-14 rounded-md font-semibold">
                  Signup
                </button>
                <p className="text-center" onClick={handleChangeFormType}>
                  Already have an account ?
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
