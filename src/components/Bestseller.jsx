import Eavpl from "../assets/eavPl.png";

const BestSeller = () => {
  const products = [
    {
      img: Eavpl,
      desc: "Authorised Distributor for India Market: Emident Audio Visual Pvt Ltd",
    },
    {
      img: Eavpl,
      desc: "Authorised Distributor for India Market: Emident Audio Visual Pvt Ltd",
    },
    {
      img: Eavpl,
      desc: "Authorised Distributor for India Market: Emident Audio Visual Pvt Ltd",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-50 flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl font-bold text-gray-900 flex items-center justify-center">
          <span className="w-1.5 h-6  mr-2"></span> Company Latest News
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[95%] mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center shadow-md p-6 h-auto  rounded-lg border border-gray-200 hover:shadow-lg transition-all flex flex-col items-center">
            {/* Product Image */}
            <img
              src={product.img}
              alt="Company News Image"
              className="w-full min-h-60 object-contain bg-gray-800 rounded-md"
            />

            {/* Product Info */}
            <p className="text-green-600 font-bold mt-4">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
