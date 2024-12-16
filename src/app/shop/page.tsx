'use client';

import Link from 'next/link';
import Image from 'next/image';

const Shop = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/image/shop.png"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Shop</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Shop
          </p>
        </div>
      </section>

      {/* Second Section: Product Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Example Product */}
            <div className="text-center">
              <Image
                src="/image/product1.jpeg"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            {/* Add other products here... */}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href={`/shop?page=1`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              Next
            </div>
          </Link>
        </div>
      </section>

      {/* Third Section: Concept Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
              <p className="text-lg text-gray-700">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>

            {/* Second Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
              <p className="text-lg text-gray-700">
                If the product has an issue, consectetur adipim scing elit.
              </p>
            </div>

            {/* Third Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
              <p className="text-lg text-gray-700">
                100% secure payments, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
