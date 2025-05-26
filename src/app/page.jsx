"use client";

import Image from "next/image";

const ProductCard = ({ title, description, imageSrc, imageAlt, price }) => (
  <div className="bg-amber-50 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
    <div className="relative h-64">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-amber-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-amber-600 text-lg">{price}</span>
        <a
          href="#order"
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  </div>
);

export default function Home() {
  const products = [
    {
      title: "Makaroni Balado",
      description:
        "Makaroni dengan bumbu balado pedas khas yang diproses dengan teknik khusus untuk menghasilkan tekstur yang renyah.",
      imageSrc: "/makaronibalado.svg",
      imageAlt: "Makaroni Balado",
      price: "Rp 10.000",
    },
    {
      title: "Makaroni Pedas Daun Jeruk",
      description:
        "Perpaduan cita rasa pedas dengan aroma segar daun jeruk yang khas, menciptakan sensasi yang tak terlupakan.",
      imageSrc:
        "/makaronipedasjeruk.svg",
      imageAlt: "Makaroni Pedas Daun Jeruk",
      price: "Rp 10.000",
    },
    {
      title: "Keripik Pisang Manis",
      description:
        "Keripik pisang dengan lapisan gula yang manis, renyah di luar dan lembut di dalam. Camilan tradisional dengan sentuhan modern.",
      imageSrc:
        "/keripikpisangmanis.svg",
      imageAlt: "Keripik Pisang Manis",
      price: "Rp 10.000",
    },
  ];

  return (
    <div className="min-h-svh">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-b from-yellow-50 to-amber-100 py-20 min-h-svh flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-800">
                Krenyax Snacks
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-amber-700">
                Camilan Krenyes untuk Semua
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                Nikmati kelezatan camilan krenyes dengan cita rasa khas Indonesia.
                Dibuat dengan bahan berkualitas untuk menemani setiap momen
                berhargamu.
              </p>
              <a
                href="#products"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block"
              >
                Lihat Produk Kami
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <Image
                  src="/logo.svg"
                  alt="Krenyax Product Showcase"
                  fill
                  className="object-contain rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-white min-h-svh flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan camilan krenyes dengan rasa yang unik dan menggugah
              selera
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="aboutus"
        className="py-20 bg-amber-50 min-h-svh flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full h-80">
                <Image
                  src="/logo.svg"
                  alt="About Krenyax"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
                Tentang Kami
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Krenyax adalah UMKM yang berdedikasi untuk menghadirkan camilan
                berkualitas dengan cita rasa khas Indonesia. Kami memulai
                perjalanan kami dari dapur kecil dengan visi untuk menghadirkan
                makanan ringan yang tidak hanya enak tapi juga menggunakan
                bahan-bahan pilihan.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Setiap produk Krenyax dibuat dengan cinta dan perhatian khusus
                terhadap detail. Kami terus berinovasi untuk menghadirkan variasi
                rasa yang unik dan memenuhi selera pasar yang terus berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section
        id="order"
        className="py-20 bg-white min-h-svh flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Pesan Produk Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dapatkan produk Krenyax melalui platform e-commerce favorit Anda
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg text-center max-w-sm mx-auto transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.003-.104z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">TikTok Shop</h3>
              <p className="text-gray-600 mb-6">
                Pesan produk Krenyax langsung dari TikTok Shop kami dan dapatkan
                promo eksklusif!
              </p>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 inline-block"
              >
                Kunjungi TikTok Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}