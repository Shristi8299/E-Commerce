import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";


interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const schema = Joi.object<IFormInput>({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(6).max(100).required(),
});

export default function Register() {

const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
  resolver: joiResolver(schema),
});

  // const { register, handleSubmit } = useForm();

  const onSubmit = async (data1:IFormInput) => {
    try {
      const res = await axios.post("http://localhost:3000/register", data1);
      console.log(res, "Register successful!");
    } catch (error) {
      console.log(error, "Registration failed!!");
    }
  };

  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-6">Create Account</h1>
      <div className="mt-4 flex justify-center px-4 py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4"
        >
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
             {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter email"
              className="w-full border            
            border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
             {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
              
            />
             {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* <div>
         
          <input
            type="password"
            placeholder="Cofirm Password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div> */}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
          >
            Create Account
          </button>

          <p className="text-center">Already have an account?</p>

          <div className="text-center">
            <Link to="/login" className="underline">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
