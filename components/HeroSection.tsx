"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
            <Image
              src="/home-1.jpg"
              alt=""
              width={425}
              height={425}
            />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl mt-6 md:mt-0 md:text-5xl font-Butler">Honestly, there&#39;s no such thing as an educational emergency!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          As parents, we know how hard it is to watch your
          child struggle as you search for ways to help.
          If you&#39;ve been there too, please know you&#39;ve made
          it to the right place. So, take a deep breath,
          relax those shoulders, and let us show you just
          how quickly we can turn things around. 

          </p>
          <br />
          <Link
            href="#method"
            className="text-neutral-100 px-8 py-4 bg-teal-600 rounded shadow hover:bg-teal-700 font-Nunito cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          href="#about"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
            <Image
              src="/clubhouse.jpg"
              alt=""
              width={425}
              height={425}
            />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl mt-6 md:mt-0 md:text-4xl font-Butler">
          Join us at the Clubhouse, where together we&#39;ll empower the next generation of readers through Evidence-Based Literacy Instruction.
          </h1>
          <br /><br />
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          Here&#39;s how we do it:
          </p> 
          <HiArrowDown size={35} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
