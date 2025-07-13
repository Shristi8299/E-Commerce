export default function Contacts() {
  return (
    <>
    <h1 className="font-bold text-center text-2xl mt-6">Contact Us</h1>
    <div className="mt-2 flex justify-center px-4 py-4">
      <form className="w-full max-w-md bg-white p-6 rounded-xl   shadow-md hover:shadow-xl  space-y-4">
        <div> 
         
          <input
             required
            type="text"
            placeholder="Enter name"
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
            required
            type="number"
            placeholder="Contact number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
         
          <textarea
            placeholder="Type your message"
            className="w-full border border-gray-300 rounded-lg p-2 h-20  resize-none focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
