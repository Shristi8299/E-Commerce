import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<any>();
  const [email, setEmail] = useState<any>("");
  const user = {
    email: "thanos@gmail.com",
    password: "12345678",
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", user);
      console.log(res);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };
  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-6">Log In</h1>
      <div className="mt-4  flex justify-center px-4 py-4 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
          className="w-full  max-w-md bg-white  py-15 p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4"
        >
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter email"
              className="w-full h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <input
              placeholder="Password"
              className="w-full  h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <p className=" bg-red-400 text-white w-fit">{error}</p>
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
