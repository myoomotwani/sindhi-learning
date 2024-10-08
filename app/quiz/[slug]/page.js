"use client";
import CustomAudioPlayer from '@/components/CustomAudioPlayer';
import Navbar from '@/components/Navbar';
import { quizData } from '@/utils/quizData';
import Image from 'next/image';
import React, { useState } from 'react'

export default function Page({ params }) {
    const slug = params.slug
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState("")
    const [correct, setCorrect] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleCheckAnswer = () => {
      setSubmitted(true);
      if (selected === quizData[slug][currentQuestion].choices[quizData[slug][currentQuestion].correctAnswer]) {
        setCorrect(true);
        setScore(score + 1)
      }
      else {
        setCorrect(false);
      }
    }

    const handleContinue = () => {
      if (quizData[slug].length - 1 === currentQuestion) {
        setShowScore(true);
      }
      else {
        setSubmitted(false);
        setCurrentQuestion(currentQuestion + 1)
        setCorrect(false)
        setSelected("")
      }
    }


  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-start space-x-2 p-3 sm:px-5 md:px-10'>
        <Image src={"/icon1.png"} alt='icon' height={20} width={20} />
        <span className='text-[#112B5E] font-semibold'>Quiz-{slug}</span>
      </div>
      {showScore ? 
      <div className='flex flex-col space-y-3 items-center justify-center'>
        <Image src={"/bulb.png"} alt='bulb' width={100} height={100} unoptimized />
        <span className='text-[#FF7C1A] font-semibold text-3xl'>Your score is</span>
        <span className='text-xl font-semibold'>{score} out of {quizData[slug].length}</span>
      </div>
      :
      <div className='flex items-center justify-center'>
        <div className='flex flex-col w-[90%] sm:w-[70%] md:w-1/2 shadow-xl drop-shadow-lg rounded-lg p-5'>
          <span className='text-[#FF7C1A] font-semibold text-xl pb-2'>{quizData[slug][currentQuestion].question}</span>
          <div className='grid grid-cols-2 gap-5 py-3'>
            {quizData[slug][currentQuestion].choices?.map((i, index) => (
              <button disabled={submitted} onClick={() => setSelected(i)} key={index} className={`rounded-lg shadow-lg py-2 px-5 text-[#112B5E] font-semibold border border-white hover:border ${selected === i && !submitted && "bg-teal-300 border-teal-300"} ${submitted && selected === i && correct && "bg-green-400 border-green-400"} ${submitted && selected === i && !correct && "!bg-red-500 !border-red-500"} hover:border-teal-400 ${submitted && !correct && i === quizData[slug][currentQuestion].choices[quizData[slug][currentQuestion].correctAnswer] && "bg-green-500 border-green-500"}`}>
                {i}
              </button>
            ))}
          </div>
          <div className='flex flex-col space-y-3 items-center justify-center pt-3'>
            <CustomAudioPlayer src={quizData[slug][currentQuestion].audio} />
            {!submitted ? 
            <button onClick={handleCheckAnswer} disabled={selected === ""} className='bg-[#FF7C1A] rounded-xl shadow-xl text-white py-2 px-7 w-fit font-semibold'>Submit Answer</button> 
            :
            <button onClick={handleContinue} className='bg-[#FF7C1A] rounded-xl shadow-xl text-white py-2 px-7 w-fit font-semibold'>Continue</button>}
          </div>
        </div>
      </div>}
    </div>
  )
}