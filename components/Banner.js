import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
           <Image
           src="https://links.papareact.com/0fm"
           layout="fill"
           objectFit="cover"
           />
           <div className="relative top-1/2 width-full text-center">
               <p className="text-sm sm:text-lg font-semibold">Not Sure Where To Go? PERFECT</p>
               <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button>
           </div>
        </div>
    )
}

export default Banner
