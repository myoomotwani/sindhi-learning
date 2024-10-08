import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className="md:flex flex-col hidden">
        <Link href={"/"} className="bg-white rounded-b-2xl w-fit p-5 z-10 ml-20 flex flex-col space-y-3 absolute">
          <Image src={"/logo.png"} alt="logo" height={250} width={250} unoptimized />
        </Link>
        <Image src={"/banner2.png"} alt="banner" height={100} width={200} className="w-screen h-[18vh]" unoptimized />
    </div>
    <div className='bg-[#0078C4] flex md:hidden items-center justify-center pb-3'>
      <Link href={"/"} className="bg-white rounded-b-2xl w-fit p-5 z-10 flex flex-col space-y-3">
        <Image src={"/logo.png"} alt="logo" height={150} width={200} unoptimized />
      </Link>
    </div>
    </>
  )
}

export default Navbar