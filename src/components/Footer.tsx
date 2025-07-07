import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin ,FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
          {/* footer section start  */}

      <footer className="w-full bg-gray-900 text-white h-56" >
        <div className="flex justify-around py-6 leading-8">
          <div>
            <ul>
              <li>contact us</li>
              <li>new arrival</li>
              <li>wishlist</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>FAQs</li>
              <li>sale</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Shop</li>
              <li>Shipping & Returns</li>
              <li>Payment Options</li>
            </ul>
          </div>
        </div>

       {/* social media link */}
       <div className=" flex justify-center gap-6 pb-6 text-xl">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://instagram.com"> < FaInstagram/></a>
        <a href="https://linkedin.com"><FaLinkedin/></a>
       </div>

       <div className="flex justify-center gap-2 items-center text-md">
           <FaRegCopyright />
        <p>2025 ShopEase. All rights reserved.</p>
       </div>
      </footer>
    </div>
  )
}
