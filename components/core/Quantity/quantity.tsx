import { useState } from "react";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
const Quantity = ({ onChange }: any) => {
  const validateQuantity = (e: any) => {
    if (e.target.value < 1) {
      setQty(1);
      onChange(qty);
      return;
    } else {
      setQty(e.target.value);
      onChange(qty);
    }
  };
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-nowrap items-center  mt-5">
      <button
        onClick={() => {
          if (qty > 1) {
            setQty(qty - 1);
            onChange(qty - 1);
          }
        }}
        className="bg-purple-600 p-2 rounded-full shadow"
      >
        <IoIosRemove className="text-white text-2xl" />
      </button>
      <input
        className="w-[32px] outline-transparent border-b border-slate-800 text-[20px] text-md text-center mx-2 leading-[25px]"
        type="number"
        value={qty}
        onChange={validateQuantity}
      />
      <button
        onClick={() => {
          setQty(qty + 1);
          onChange(qty + 1);
        }}
        className="bg-purple-600 p-2 rounded-full shadow"
      >
        <IoIosAdd className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Quantity;
