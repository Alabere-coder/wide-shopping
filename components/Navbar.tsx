import Image from "next/image"
import {logo} from "../public/assets/images/index"

const Navbar = () => {
  return (
    <div className='w-full bg-blue text-white'>
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
            
            {/* LOGO SECTION */}
            <div className="navBarHover">
                <Image src={logo} className="w-44" alt="logo" />
            </div>

            {/* DEPARTMENT SECTION */}
            <div className="navBarHover">
              <div className="w-4 grid grid-cols-2 gap-[2px]">
                <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              </div>
              <p>Departments</p>
            </div>


            <div>
              <div className="navBarHover">
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                  <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
                </div>
                <p>Services</p>
              </div>
            </div>


            <div className="h-10 flex flex-1 relative">
              <input className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200" type="text" placeholder="Search everything at wide-shopping and in store"/> 
            </div>
        </div>
    </div>
  )
}

export default Navbar