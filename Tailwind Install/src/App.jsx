import React, { useEffect } from 'react';
import feather from 'feather-icons';
import { ChevronRight } from 'react-feather';


export default function App() {
  useEffect(() => {
  feather.replace();
}, []);
  return (
    <div> 
    <nav className="bg-white  shadow-sm ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 sm:px-0.5">
     
        <img
          src="/Logo.png"                          
          alt="Logo"
        className="w-[125px] h-[30px] object-contain"
        />

       
        <ul className="flex gap-10 lg:gap-12 pt-[]">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="text-black font-sans py-4
                         hover:text-gray-600 cursor-pointer
                         transition-all duration-200 relative"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex space-x-8">
          <a href="/login">
          <img src="/Screenshot (287).png" width="28px" height="15px"/>
          </a>
          <a href="/search">
          <img src="/search (287).png" width="28px" height="15px"/>
          </a>
          <a href="/favorite">
          <img src="/fvt (287).png" width="28px" height="15px"/>
          </a>
          <a href="/cart">
          <img src="/cart (287).png" width="28px" height="15px"/>
          </a> 
        </div>
      </div>
    </nav>
    <section className="w-full h-[575px] bg-cover bg-center relative" style={{backgroundImage:"url('/auth-background.webp')"}}> 
      <div className="absolute top-0 right-0 bg-[rgb(245,245,245)] w-[700px] h-[400px] p-10 flex flex-col gap-6 rounded-lg shadow-lg justify-start">
        <h1 className="font-bold"> 
          New Arrival 
        </h1>
        <h2 className="text-[rgb(182,142,47)] text-[52px] font-bold leading-[65px] w-[75%]"> 
          Discover Our <br/> New Collection
        </h2>
        <p className="text-black text-[1.2rem] font-serif font-semibold max-w-2xl px-4"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p> 
        <button className="bg-[rgb(182,142,47)] text-white font-bold hover:shadow-[0_4px_20px_rgb(182,142,47)] 
                           transition-shadow duration-300 h-[400px] w-[150px] rounded-[5px]"> BUY NOW
        </button>
        </div>
    </section>
    <div className="text-center py-10"> 
      <h3 className="font-bold text-4xl"> Browse The Range</h3>
      <p className="text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className= "flex justify-center py-8 gap-6"> 
      <div className="flex flex-col items-center">
      <img src="/Dining.png" alt="Dining" className="hover:cursor-pointer hover:shadow-[0_4px_12px_rgb(128,128,128)] transition-all duration-200"/>
      <p className="mt-4 text-center font-bold"> Dining </p>
      </div>
      <div className="flex flex-col items-center">
      <img src="/Living.png" alt="Living" className="hover:cursor-pointer hover:shadow-[0_4px_12px_rgb(128,128,128)] transition-all duration-200"/>
      <p className="mt-4 text-center font-bold"> Living </p>
      </div>
      <div className="flex flex-col items-center">
      <img src="/bedroom.png" alt="Bedroom" className="hover:cursor-pointer hover:shadow-[0_4px_12px_rgb(128,128,128)] transition-all duration-200"/>
            <p className="mt-4 text-center font-bold"> Bedroom </p>
      </div>
    </div>

      <div> 
        <h4 className="text-center font-bold text-4xl">
          Our Products
        </h4>
        <div className="grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-6 px-8 py-10"> 
          <div> 
            <img src="/first.jpg" className="h-[350px] w-full object-cover "/>
            <div className="bg-gray-200">
           
            <h5 className="font-bold py-1.5"> Slytherine</h5>
            <p className="text-sm py-1.5 text-gray-400"> Stylish cafe chair</p>
            <p className="font-bold py-1.5"> Rp 2.500.000</p>
            </div>
          </div>
          <div>
            <img src="/second.jpg" className="h-[350px] w-full object-cover "/>
          <div className="bg-gray-200">
            <h5 className="font-bold py-1.5"> Elegant Dining Table</h5>
          <p className="text-sm py-1.5 text-gray-400"> Anything to eat!</p>
          <p className="font-bold py-1.5"> Rp 2.500.000 </p>
          </div>
          </div>
          <div> 
            <img src="/third.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200">
            <h5 className="font-bold py-1.5"> Cozy Corner Sofa</h5>
            <p className="text-sm py-1.5 text-gray-400"> Luxury big sofa</p>
            <p className="font-bold py-1.5"> Rp 7.000.000 
            </p>
            </div>
          </div>
          <div> 
            <img src="/fourth.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200">
            <h5 className="font-bold py-1.5"> Modern Bed Frame</h5>
            <p className="text-sm py-1.5 text-gray-400" > Anything to sleep!</p>
            <p className="font-bold py-1.5"> Rp 7.000.000</p>
            </div>
          </div>
          <div> 
            <img src="/fifth.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200">
            <h5 className="font-bold py-1.5"> Vintage Coffee Table</h5>
            <p className="text-sm py-1.5 text-gray-400"> Anything to drink!</p>
            <p className="font-bold py-1.5"> Rp 500.000
            </p>
          </div>
          </div>
          <div> 
            <img src="/sixth.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200">
            <h5 className="font-bold py-1.5"> Contemporary Lounge Chair</h5>
            <p className="text-sm py-1.5 text-gray-400"> Anything to relax!</p>
            <p className="font-bold py-1.5"> Rp 500.000 </p>
          </div>
          </div>
          <div> 
            <img src="/seventh.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200"> 
            <h5 className="font-bold py-1.5"> Minimalist Bedside Table</h5>
            <p className="text-sm py-1.5 text-gray-400"> Cute bed set</p>
            <p className="font-bold py-1.5"> Rp 150.000</p>
          </div>
          </div>
          <div> 
            <img src="/eighth.jpg" className="h-[350px] w-full object-cover"/>
            <div className="bg-gray-200"> 
            <h5 className="font-bold py-1.5"> Sleek Office Desk</h5>
            <p className="text-sm py-1.5 text-gray-400"> Anything to work!</p>
            <p className="font-bold py-1.5"> Rp 1.500.000</p>
            </div>
          </div>

        </div>
        <div className="flex justify-center"> 
          <button className="text-[rgb(182,142,47)] font-bold border-1 border-[rgb(182,142,47)] hover:bg-[rgb(182,142,47)]
                             hover:text-white transition-colors duration-300 px-4 py-2 mb-10"> Show More</button>
      </div>
</div>


<section className="w-full bg-[rgb(245,245,245)] py-24 px-12"> 
<div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-16 items-center "> 
<div className=" flex-1 min-w-[260px] space-y-6 "> 
  <h6 className="font-bold text-4xl leading-tight">50+ Beautiful rooms 
  <br/> inspiration
  </h6>

<p className="text-gray-700 font-bold"> Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
<button className="bg-[rgb(182,142,47)] text-white font-bold px-8 py-2"> Explore More </button>
</div>

<div className=" flex flex-col space-y-4 relative items-end ">  
  <div className="flex space-x-4 "> 
    <img src="/1.jpg" className="w-[372px] h-[486px] object-cover hover:scale-105 transition-all duration-200"/>
    <img src="/2.jpg" className="w-[372px] h-[486px] object-cover hover:scale-105 transition-all duration-200"/>
  </div>
 
  <button className=" w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"> 
    <ChevronRight className=" w-5 h-5 text-[rgb(182,142,47)]"/>
</button>

<div className="flex space-x-2 mt-6"> 
  <div className="h-[10px] w-[10px] bg-[rgb(182,142,47)] rounded-full "> </div>
<div className="h-[10px] w-[10px] bg-gray-800 rounded-full "> </div>
<div className="h-[10px] w-[10px] bg-gray-800 rounded-full "> </div>
<div className="h-[10px] w-[10px] bg-gray-800 rounded-full "> </div>
</div>
</div> 
</div> 
</section>


<section className="mt-8"> 
  <div className="text-center justify-center"> 
    <p> Share your setup with</p>
    <p className="text-2xl font-bold"> #FuniroFurniture</p>
  </div>
  
 <div className="grid grid-cols-[40%_20%_40%] gap-4 px-8 mt-6">
  {/* First Column (2 rows) */}
  <div className="flex flex-col gap-4">
    {/* Row 1 */}
    <div className="grid grid-cols-[60%_40%] gap-4">
      <img src="/a.png" className="w-full h-[300px] object-cover" />
      <img src="/b.png" className="w-full h-[300px] object-cover" />
    </div>
    {/* Row 2 */}
    <div className="grid grid-cols-[40%_60%] gap-4 w-full">
      <img src="/c.png" className="w-full h-[300px] object-cover" />
      <img src="/d.png" className="w-full h-[300px] object-cover" />
    </div>
  </div>

  {/* Middle Column (Single image centered vertically) */}
  <div className="flex items-center justify-center w-full ml-2">
    <img src="/g.jpg" className="w-full h-[300px] object-cover" />
  </div>

  {/* Third Column (2 rows) */}
  <div className="flex flex-col gap-4 w-full">
    {/* Row 1 */}
    <div className="grid grid-cols-[60%_40%] gap-4 w-full">
      <img src="/e.jpg" className="w-full h-[300px] object-cover" />
      <img src="/f.jpeg" className="w-full h-[300px] object-cover" />
    </div>
    {/* Row 2 */}
    <div className="grid grid-cols-[40%_60%] gap-4 w-full">
      <img src="/h.jpg" className="w-full h-[300px] object-cover" />
      <img src="/i.jpg" className="w-full h-[300px] object-cover" />
    </div>
  </div>
</div>

</section>
<div className="my-8 border-t border-gray-300"></div>
<div className="px-20 py-10">
<div className="flex justify-between flex-wrap gap-10">
  
  <div className=" min-w-[200px]"> 
  <h6 className="font-bold mb-4 text-2xl"> Funiro.</h6>
  <p className="text-gray-500"> 400 University Drive Suite 200 Coral 
    <br/> 
    Gables, 
    <br/> 
    FL 33134 USA
  </p>
</div>
<div> 
  <h6 className="text-gray-500 mb-2">  
    Links
  </h6>
  <ul className="space-y-1"> 
    <li> Home</li>
    <li> Shop</li>
    <li> About</li>
    <li> Contact</li>
  </ul>
</div>
<div> 
<h6 className="text-gray-500 mb-2"> 
  Help
</h6>
<ul className="space-y-1"> 
  <li> Payment Options</li>
  <li> Returns</li>
  <li> Privacy Policies</li>
</ul>
</div>
<div> 
  <h6 className="text-gray-500 mb-2"> Newsletter</h6>
  <p className="text-gray-500 mb-1"> Enter Your Email Address</p>
   <div className="border-b-2 border-black w-fit pb-1 cursor-pointer font-semibold"></div>
</div>
<div> 
  <p className="font-bold"> SUBSCRIBE</p>
</div>
</div>
</div> 

<div className="my-8 border-t border-gray-300 w-[80%] mx-auto"></div>
<p className="ml-38 mb-4"> 2023 furino. All rights revereved. </p>
  </div>
  );
}