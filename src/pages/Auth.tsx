import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [signupForm, setSignupForm] = useState(initialState);

  const handleChangeFormType = () => {
    setSignupForm(initialState);
    setIsLogin(!isLogin);
  };
  const submitForm = (e: any, isLogin: boolean) => {
    e.preventDefault();
    if (isLogin) {
      console.log("login code");
      const signupUrl = `${import.meta.env.VITE_BASEURL}/auth/login`;
      const rawbody = JSON.stringify({
        email: signupForm.email,
        password: signupForm.password,
      });

      fetch(signupUrl, {
        method: "POST",
        body: rawbody,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((data: any) => {
          console.log(data?.message);
          if (!data?.valid) {
            alert(data?.message);
          } else {
            localStorage.setItem("user", JSON.stringify(data?.message));
            alert("SignIn successfull");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      const signupUrl = `${import.meta.env.VITE_BASEURL}/auth/signup`;
      const rawbody = JSON.stringify(signupForm);

      fetch(signupUrl, {
        method: "POST",
        body: rawbody,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((data: any) => {
          console.log(data?.message);
          if (!data?.valid) {
            alert(data?.message);
          } else {
            localStorage.setItem("user", JSON.stringify(data?.message));
            alert("Signup successfull");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
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
                      value={signupForm.email}
                      onChange={(e: any) => {
                        setSignupForm({ ...signupForm, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">
                      Password
                    </label>
                    <input
                      type="password"
                      value={signupForm.password}
                      onChange={(e) => {
                        setSignupForm({
                          ...signupForm,
                          password: e.target.value,
                        });
                      }}
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
                  <button
                    onClick={(e) => submitForm(e, true)}
                    className="bg-black w-full text-center text-white h-14 rounded-md font-semibold"
                  >
                    Login
                  </button>
                  <p
                    className="text-center cursor-pointer"
                    onClick={handleChangeFormType}
                  >
                    Don't have an account ?
                  </p>
                </form>
              </div>
            ) : (
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
                      value={signupForm.firstName}
                      onChange={(e: any) =>
                        setSignupForm({
                          ...signupForm,
                          firstName: e.target.value,
                        })
                      }
                      className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={signupForm.lastName}
                      className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                      onChange={(e: any) =>
                        setSignupForm({
                          ...signupForm,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                      value={signupForm.email}
                      onChange={(e: any) => {
                        setSignupForm({
                          ...signupForm,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">
                      Password
                    </label>
                    <input
                      type="password"
                      className="text-xl p-4 border border-1 border-black rounded-md focus:border-blue-500"
                      value={signupForm.password}
                      onChange={(e: any) =>
                        setSignupForm({
                          ...signupForm,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    className="bg-black w-full text-center text-white h-14 rounded-md font-semibold"
                    onClick={(e) => submitForm(e, false)}
                  >
                    Signup
                  </button>
                  <p
                    className="text-center cursor-pointer"
                    onClick={handleChangeFormType}
                  >
                    Already have an account ?
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
