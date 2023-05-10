import { FaLocationArrow, FaEdit } from 'react-icons/fa';

function Product() {
  return (
    <>
      <div className="relative text-center mr-10 ml-10">
        <img
          className="rounded-lg productpic w-full"
          src="https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg"
        />
        <div className="p-2 backdrop-opacity-70 backdrop-invert bg-white/30 rounded-lg absolute bottom-8 left-4">
          <h6 className="font-bold">Maträtt rubrik</h6>
          <span className="text-black">Lorem ipsum dolor sit amet...</span>
        </div>
        <div className="bg-emerald-600 w-24 h-12 p-3 rounded-lg absolute top-6 left-4">
          <span className="font-bold text-white">20 kr</span>
        </div>

        <div className="p-3 w-32 h-12 backdrop-opacity-70 backdrop-invert bg-white/30 transparent rounded-lg absolute top-6 right-4">

          {/* If statement for location-symbol or edit-btn*/}

           <FaLocationArrow className="inline"/> 
          <span className="ml-2 text-black ">
            <b>1.2</b> km
          </span>

         {/*<button><FaEdit/></button> */} 
        </div>
      </div>
    </>
  );
}

export default Product;