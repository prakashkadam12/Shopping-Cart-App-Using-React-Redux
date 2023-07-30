import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">


      <div className="w-[100%] md:w-[60%] flex flex-col p-2">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" w-[350px] flex flex-col gap-5 my-14 justify-between">

        <div>
          <div className="text-2xl text-green-700 font-semibold">YOUR CART</div>
          <div className="text-green-700 text-5xl font-bold mb-5 ">SUMMARY</div>
          <p>
            <span className="font-semibold">Total Items: </span>
            {cart.length}
          </p>
        </div>

        <div>
          <p className="font-semibold">
          Total Amount: <span className="font-bold">${totalAmount}</span> </p>
          <NavLink to='/thankyou'>
            <button className="w-full bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
              CheckOut Now
            </button>
          </NavLink>

        </div>

      </div>


    </div>) : 
    (<div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-700">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
