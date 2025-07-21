import axios from "axios";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const schema = Joi.object<IFormInput>({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(6).max(100).required(),
});
export default function Login() {
 
  const { register:login, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data1:IFormInput) => {
    try {
      const res = await axios.post("http://localhost:3000/login", data1);
      console.log(res.data.loginToken, "login successful");
      localStorage.setItem("token", res.data.loginToken);
    } catch (error) {
      console.log(error, "login failed");
    }
  };
  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-6">Log In</h1>
      <div className="mt-4  flex justify-center px-4 py-4 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  max-w-md bg-white  py-15 p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4"
        >
          <div>
            <input
              {...login("email")}
              placeholder="Enter email"
              className="w-full h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
             {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...login("password")}
              placeholder="Password"
              className="w-full  h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
             {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-black text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
