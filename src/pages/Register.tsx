import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
    <h1 className="font-bold text-center text-2xl mt-6">Create Account</h1>
    <div className="mt-4 flex justify-center px-4">
      <form className="w-full max-w-md bg-white p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4">
        <div> 
          
          <input
             required
            type="text"
            placeholder="Enter full name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
         
          <input
             required
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
         
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
         
          <input
             required
             minLength={6}
            type="password"
            placeholder="Cofirm Password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>


        
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200">Create Account
        </button>

        <p className="text-center">Already have an account?</p>
        
        <div className="text-center">
          <Link to="/login"  className="underline">Log In</Link>
        </div>
        

      </form>
    </div>
    </>
  );
}
