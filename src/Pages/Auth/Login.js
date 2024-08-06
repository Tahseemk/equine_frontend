import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import AuthServices from "../../services/AuthServices";
import { setAccessToken, setUser } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router";
import { notifyError, notifySuccess } from "../../utils/toast";
import useUtilsFunction from "../../hooks/useUtilsFunction";
import logo from '../../assets/images/logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { catchError } = useUtilsFunction();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      let payload = values;
      try {
        setLoading(true);
        const response = await AuthServices.loginAdmin(payload);
        setLoading(false);
        if (response.token) {
          dispatch(setUser(response));
          dispatch(setAccessToken(response.token));
          notifySuccess("Logged in successfully");
          formik.resetForm();
          navigate("/");
        } else {
          notifyError(response.message);
        }
      } catch (error) {
        const errorMessage = catchError(error);
        setLoading(false);
        notifyError(errorMessage);
      }
    },
  });

  return (

    <>
      {/* <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-10 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h4 className="text-center text-2xl leading-9 font-extrabold text-gray-900">
            Welcome to the POS
          </h4>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label for="email" className="block text-sm font-medium leading-5  text-gray-700">User name</label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    required
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="User name"
                    id="email"
                  />
                </div>
                {formik.touched.username && formik.errors.username ? (
                  <div className="mt-1">
                    <span className="text-red-600">{formik.errors.username}</span>
                  </div>
                ) : null}
              </div>

              <div className="mt-6">
                <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                <div className="mt-2 rounded-md shadow-sm">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    type={showPassword ? "text" : "password"}
                    required
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                    id="password"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="mt-1">
                    <span className="text-red-600">{formik.errors.password}</span>
                  </div>
                ) : null}
              </div>
              <div className="mt-8">
                <span className="block w-full rounded-md shadow-sm">
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3498db] hover:[#3498db] focus:outline-none focus:border-[#3498db] focus:shadow-outline-indigo active:bg-[#3498db] transition duration-150 ease-in-out">
                    {loading ? "Processing" : "Sign in"}
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div> */}


      <section className="bg-[#F1EAD1] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-[133.75px] h-[106.77px] object-cover"
              src={logo}
              alt="logo"
            />

          </span>
          <div className="w-full bg-[#fefdfa] rounded-xl shadow dark:border md:mt-0 sm:w-2/6 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-2 sm:p-16 text-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Welcome Back!
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center pt-0">Please log in to your account.</p>
              <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6 pt-7">
                <div>
                  <input
                    className="bg-[#ffffff] autofill:bg-yellow-200 text-gray-900 block w-full p-3.5 border-[color:#D7D7D7] border-solid border focus:outline-none"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="mt-1 text-left">
                      <span className="text-red-600">{formik.errors.email}</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <input
                    className="bg-[#ffffff] autofill:bg-yellow-200 text-gray-900 block w-full p-3.5 border-[color:#D7D7D7] border-solid border focus:outline-none"
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="mt-1 text-left">
                      <span className="text-red-600 text-right">{formik.errors.password}</span>
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-[213px] text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Processing" : "Log in"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>

  );
};

export default Login;
