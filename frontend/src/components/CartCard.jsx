export default function CartCard({img,genre,productName,pricePerHour}) {
    return (
    <div className="bg-white  rounded-2xl shadow-md p-2 min-w-[166px] ">
          <img 
             src={img} 
             alt="Product" 
             className="w-full h-30 object-contain"
             onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/fallback.png"; // fallback image
              }}></img>
          <div className="mt-0">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{genre}</h2>
                <p className="text-[#30B0C7] font-bold mt-2 around">$<span>{pricePerHour}</span>per/Hr</p>
              </div>
              <p className="text-gray-500 text-sm">{productName}</p>
              <div className="flex flex-row justify-between">
                <button className="mt-3 bg-[#30B0C7] text-white font-semibold px-1  w-[100px] rounded-xl hover:scale-105">Buy Now</button>
                <button className="mt-3 bg-[#30B0C7] text-white font-semibold px-2 py-2 w-[100px] rounded-xl hover:scale-105">Remove</button>
              </div>
              
          </div>   
    </div>
    );
  }
  

  

