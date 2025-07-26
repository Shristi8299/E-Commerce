type CartItem = {
  _id: string;
  imageUrl: string;
  item: string;
  price: number;
  quantity: number;
};

interface CartsProps {
  cart: CartItem[];
  onDelete: any;
  onDelete2?: (youCanNameAnything: any[], sameForThis: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export default function Carts({
  cart = [],
  onDelete,
  onDelete2,
  increaseQuantity,
  decreaseQuantity,
}: CartsProps) {
  // const totalPrice = cart.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  const totalPrice = 0;

  return (
    <div className="p-6 min-h-[80vh]">
      {cart?.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((cartItem, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={cartItem.imageUrl}
                alt={cartItem.item}
                className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
              />

              <div className="flex-1 md:ml-6 space-y-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">{cartItem.item}</h3>
                <p className="text-gray-600">
                  Price: ${cartItem.price.toFixed(2)}
                </p>
                <p className="text-gray-600">Quantity: {cartItem.quantity}</p>
              </div>

              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                <button
                  // onClick={() => onBuyNow?.(cartItem)}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Show Now
                </button>

                <button
                  // onClick={() => onDelete(cartItem._id)}
                  onClick={() => onDelete2?.(cart, index)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>

                {/* <Button buttonName={"Delete"}  onClick={() => onDelete?.(cart,index)} /> */}

                <div className=" flex gap-2 justify-center items-center">
                  <button
                    className=" h-8 w-8 bg-white rounded-md text-black font-bold text-2xl flex justify-center items-center text-center cursor-pointer"
                    onClick={() => increaseQuantity(cartItem._id)}
                  >
                    +
                  </button>
                  <button
                    className=" h-8 w-8 bg-white rounded-md text-black font-bold text-2xl flex justify-center items-center text-center cursor-pointer"
                    onClick={() => decreaseQuantity(cartItem._id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right pt-4 font-semibold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}




