"use client";
import CustomAudioPlayer from "@/components/CustomAudioPlayer";
import { quizData } from "@/utils/quizData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [backgroundSrc, setBackgroundSrc] = useState("/banner.png");

  useEffect(() => {
    const updateBackgroundImage = () => {
      const width = window.innerWidth;
      if (width < 550) {
        // Small screens
        setBackgroundSrc("/banner3.png");
      // } else if (width >= 640 && width < 1024) {
      //   // Medium screens
      //   setBackgroundSrc("/images/medium.jpg");
      } else {
        // Large screens and above
        setBackgroundSrc("/banner.png");
      }
    };
    // Initial call to set the background image
    updateBackgroundImage();

    // Add event listener to update on resize
    window.addEventListener("resize", updateBackgroundImage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);


  return (
    <div className="bg-white flex flex-col space-y-5 pb-10 items-center justify-center">
      <div className="flex flex-col">
        <div className="bg-[#0078C4] w-screen flex items-center justify-center min-[550px]:hidden">
          <div className="p-5 bg-white w-fit rounded-b-2xl">
            <Image src={"/logo.png"} alt="logo" height={250} width={250} unoptimized className="w-40" />
          </div>
        </div>
        <div className="bg-white rounded-b-2xl w-fit p-5 z-10 ml-12 lg:ml-20 min-[550px]:flex flex-col space-y-3 absolute hidden">
          <Image src={"/logo.png"} alt="logo" height={150} width={180} unoptimized className="" />
        </div>
        <div className="absolute ml-2 min-[450px]:ml-10 min-[450px]:mt-28 min-[500px]:mt-32 min-[550px]:mt-20 min-[550px]:ml-12 lg:ml-20 sm:mt-24 mt-24 md:mt-24 flex flex-col text-white max-w-52 min-[400px]:max-w-72 md:max-w-96">
          <span className="min-[400px]:text-xl min-[550px]:text-base md:text-2xl md:max-w-80 font-semibold tracking-wider">Unlock the beauty of the Sindhi language</span>
          <span className="font-thin text-xs min-[400px]:text-sm min-[550px]:text-xs md:text-base">learn effortlessly, connect deeply, and embrace a rich cultural heritage.</span>
        </div>
        <Image src={backgroundSrc} alt="banner" height={100} width={200} className="w-screen md:h-[40vh]" unoptimized />
      </div>
      <div className="flex flex-col items-center lg:flex-row md:items-start justify-center w-[90%] space-y-5 lg:space-y-0 lg:space-x-10">
        <div className="drop-shadow-2xl w-full flex flex-col p-5 shadow-xl rounded-lg lg:w-[60%] xl:w-[70%]">
          <span className="font-semibold pb-4">ilm ji jaanch(علم جي جانچ)</span>
          <div className="grid grid-cols-2 gap-5 text-[#112B5E] font-semibold text-sm sm:text-base">
            <Link href={"/quiz/1"} className="rounded-lg shadow-lg drop-shadow-lg p-2 px-4 md:px-10 hover:text-white hover:bg-[#112B5E]">1) Jaanch 1</Link>
            <Link href={"/quiz/2"} className="rounded-lg shadow-lg drop-shadow-lg p-2 px-4 md:px-10 hover:text-white hover:bg-[#112B5E]">2) Jaanch 2</Link>
            <Link href={"/quiz/3"} className="rounded-lg shadow-lg drop-shadow-lg p-2 px-4 md:px-10 hover:text-white hover:bg-[#112B5E]">3) Jaanch 3</Link>
            <Link href={"/quiz/4"} className="rounded-lg shadow-lg drop-shadow-lg p-2 px-4 md:px-10 hover:text-white hover:bg-[#112B5E]">4) Jaanch 4</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-3 shadow-xl drop-shadow-2xl rounded-lg py-5 w-full lg:w-[40%] xl:w-[30%]">
          <div className="flex flex-col justify-center border-b border-[#D2D2D2] px-5 pb-2 space-y-2">
            <div className="flex space-x-3 items-start justify-start">
              <Image src={"/icon1.png"} alt="icon" height={10} width={20} unoptimized />
              <span className="text-[#112B5E] font-semibold">Sound of Progress</span>
            </div>
            <span className="text-sm">Welcome to &apos;Sound of Progress&apos;, a space where learners like you share their journey of mastering Sindhi.</span>
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
              <CustomAudioPlayer src={quizData[1][0].audio} />
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
              <CustomAudioPlayer src={"/audios/Recording.mp3"} />
              <CustomAudioPlayer src={"/audios/Recording.mp3"} />
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
              <CustomAudioPlayer src={"/audios/Recording.mp3"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
