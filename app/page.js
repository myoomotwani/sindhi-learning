"use client";
import CustomAudioPlayer from "@/components/CustomAudioPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white flex flex-col space-y-5 pb-10 items-center justify-center">
      <div className="flex flex-col">
        <div className="bg-white rounded-b-2xl w-fit p-5 z-10 ml-20 flex flex-col space-y-3 absolute">
          <Image src={"/logo.png"} alt="logo" height={250} width={250} unoptimized />
        </div>
        <div className="absolute ml-20 mt-28 flex flex-col space-y-3 text-white">
          <span className="text-2xl max-w-80 font-semibold tracking-wider">Unlock the beauty of the Sindhi language</span>
          <span className="font-thin">learn effortlessly, connect deeply, and embrace a rich cultural heritage.</span>
        </div>
        <Image src={"/banner.png"} alt="banner" height={100} width={200} className="w-screen h-[40vh]" unoptimized />
      </div>
      <div className="flex items-start justify-center w-[90%] space-x-10">
        <div className="drop-shadow-2xl flex flex-col p-5 shadow-xl rounded-lg w-[70%]">
          <span className="font-semibold pb-4">ilm ji jaanch(علم جي جانچ)</span>
          <div className="grid grid-cols-2 gap-3 text-[#112B5E] font-semibold">
            <button className="rounded-lg shadow-lg drop-shadow-lg p-2 px-10 hover:text-white hover:bg-[#112B5E]">1) Jaanch 1</button>
            <button className="rounded-lg shadow-lg drop-shadow-lg p-2 px-10 hover:text-white hover:bg-[#112B5E]">2) Jaanch 2</button>
            <button className="rounded-lg shadow-lg drop-shadow-lg p-2 px-10 hover:text-white hover:bg-[#112B5E]">3) Jaanch 3</button>
            <button className="rounded-lg shadow-lg drop-shadow-lg p-2 px-10 hover:text-white hover:bg-[#112B5E]">4) Jaanch 4</button>
          </div>
        </div>
        <div className="flex flex-col space-y-3 shadow-xl drop-shadow-2xl rounded-lg py-5 w-[30%]">
          <div className="flex space-x-3 items-start justify-start border-b border-[#D2D2D2] px-5 pb-2">
            <Image src={"/icon1.png"} alt="icon" height={10} width={20} unoptimized />
            <span className="text-[#112B5E] font-semibold">Sound of Progress</span>
          </div>
          <div className="flex flex-col space-y-3 items-start justify-center border-b border-[#D2D2D2] pb-4">
            <div className="flex space-x-3 items-center justify-center px-5">
              <div className="bg-[#FD8469] rounded-xl p-3 py-4">
                <Image src={"/quotationMark.png"} alt="icon" width={30} height={30} unoptimized />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-semibold">Dairla B.</span>
                <span>Following is the Audio of Dairla B.</span>
              </div>
            </div>
            <div className="w-full pl-5 pr-3">
              <CustomAudioPlayer src={"/success.mp3"} />
            </div>
          </div>
          <div className="flex flex-col space-y-3 items-start justify-center border-b border-[#D2D2D2] pb-4">
            <div className="flex space-x-3 items-center justify-center px-5">
              <div className="bg-[#FD8469] rounded-xl p-3 py-4">
                <Image src={"/quotationMark.png"} alt="icon" width={30} height={30} unoptimized />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-semibold">Eidan P.</span>
                <span>Following is the Audio of Eidan P.</span>
              </div>
            </div>
            <div className="w-full pl-5 pr-3 flex flex-col space-y-2">
              <CustomAudioPlayer src={"/success.mp3"} />
              <CustomAudioPlayer src={"/success.mp3"} />
            </div>
          </div>
          <div className="flex flex-col space-y-3 items-start justify-center">
            <div className="flex space-x-3 items-center justify-center px-5">
              <div className="bg-[#FD8469] rounded-xl p-3 py-4">
                <Image src={"/quotationMark.png"} alt="icon" width={30} height={30} unoptimized />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-semibold">Dairla B.</span>
                <span>Following is the Audio of Dairla B.</span>
              </div>
            </div>
            <div className="w-full pl-5 pr-3">
              <CustomAudioPlayer src={"/success.mp3"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
