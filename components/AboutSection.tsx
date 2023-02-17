import React from "react"
import Image from "next/image"
import Link from "next/link"


const AboutSection = () => {
  return (
    <section id="meetus">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Meet Us
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/cri.png"
              alt=""
              width={325}
              height={325}
              className=""
            />
          </div>
          <div className="md:mt-2 md:w-4/5">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left font-serif">
              Hey there!
            </h1>
            <p>
              <span className="font-bold text-2xl">I&#39;m Cristina, and I know your kiddo can do amazing things!</span>
            </p>
            <br />
            <p>
              As their tutor, I am here to cheer them on and help them achieve their goals;
              because every child deserves someone who believes in them. 
            </p>
            <br />
            <p className="text-sm">
              <Link
                target="_blank"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                href="https://nicolamarrison.com/about">My Approach</Link>
            </p>
            <br />
            <p>
              <span className="font-bold text-2xl">Connect First, Teach Second</span>
            </p>
            <br />
            <p>
              <span className="font-bold text-teal-500">
                When children feel valued and respected, they are more receptive and
                willing to tackle challenging material that expands their skills
                beyond what they previously thought possible.  
              </span> 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            {/* <h1 className="text-2xl font-bold mb-6">My Skills</h1> */}
           
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
