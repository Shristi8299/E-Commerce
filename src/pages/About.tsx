
export default function About() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-pink-50 px-4 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About ShopEase</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold text-pink-500">ShopEase</span>, we believe shopping should be simple, stylish, and satisfying.
          We specialize in offering a wide range of trendy and affordable clothing for every style and season.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Our team carefully curates collections that reflect the latest fashion trends while ensuring high quality and comfort.
          Whether you're shopping for basics, occasion wear, or statement pieces — we've got you covered.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Thank you for choosing ShopEase — where fashion meets ease.
        </p>
      </div>
    </section>
  );
}
