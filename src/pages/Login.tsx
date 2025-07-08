import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-6">Log In</h1>
      <div className="mt-4  flex justify-center px-4 ">
        <form className="w-full  max-w-md bg-white  py-15 p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4">
          <div>
            <input
              required
              type="email"
              placeholder="Enter email"
              className="w-full h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <input
              required
              type="number"
              placeholder="Password"
              className="w-full  h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
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
