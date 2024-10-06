import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-col">
        <Link href={"/"} className="bg-white rounded-b-2xl w-fit p-5 z-10 ml-20 flex flex-col space-y-3 absolute">
          <Image src={"/logo.png"} alt="logo" height={250} width={250} unoptimized />
        </Link>
        <Image src={"/banner2.png"} alt="banner" height={100} width={200} className="w-screen h-[15vh]" unoptimized />
      </div>
  )
}

export default Navbar