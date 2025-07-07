export default function About() {
  return (
    <div className="w-full">
      <img
        src="images/About.jpg"
        alt="ShopEase team"
        className="w-full h-[400px] object-fit opacity-75"
      />

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Our Mission
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          To empower customers with a delightful shopping experience, built on trust,
          convenience, and value. We aim to be your go-to destination for everyday needs,
          backed by top-notch customer service and fast delivery.
        </p>
      </div>
    </div>
  );
}
