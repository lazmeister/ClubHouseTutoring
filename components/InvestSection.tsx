import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const MethodSection = () => {
  return (
    <section id="invest">
      <h1 className="my-10 text-center font-bold text-4xl font-Butler">
        Invest
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <h1 className="text-3xl font-bold mb-6 font-Butler">03.  Invest in your child&#39;s education and watch them thrive!</h1>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left">
        <div className="flex flex-col md:w-1/3 text-center bg-slate-100 py-20 px-6 mx-3">
          <h2 className="text-3xl font-bold mb-6 font-Butler">
            Private
          </h2>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              one-on-one instruction
          </p>
          <h1 className="text-3xl font-bold mb-6 font-Butler">
            $44.25 / lesson
          </h1>
          <Link
            href="#contactUs"
            className="text-neutral-100 px-8 py-4 bg-teal-600 rounded shadow hover:bg-teal-700 font-Nunito cursor-pointer"
          >Let&#39;s Start</Link>
        </div>
        <div className="flex flex-col md:w-1/3 text-center bg-slate-100 py-20 px-6 mx-3">
          <h2 className="text-3xl font-bold mb-6 font-Butler">
          Buddy Up
          </h2>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              save with semi-private instruction 
          </p>
          <h1 className="text-3xl font-bold mb-6 font-Butler">
            $35.40 / lesson
          </h1>
          <Link
            href="#contactUs"
            className="text-neutral-100 px-8 py-4 bg-teal-600 rounded shadow hover:bg-teal-700 font-Nunito cursor-pointer"
          >I&#39;m in!</Link>
        </div>
        <div className="flex flex-col md:w-1/3 text-center bg-slate-100 py-20 px-6 mx-3">
          <h2 className="text-3xl font-bold mb-6 font-Butler">
          Micro-group
          </h2>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              (3 to 1) instruction
          </p>
          <h1 className="text-3xl font-bold mb-6 font-Butler">
            $26.55 / lesson
          </h1>
          <Link
            href="#contactUs"
            className="text-neutral-100 px-8 py-4 bg-teal-600 rounded shadow hover:bg-teal-700 font-Nunito cursor-pointer"
          >Say No More</Link>
        </div>
      </div>
        HST extra, 8 lesson minimum
    </section>
  )
}

export default MethodSection
