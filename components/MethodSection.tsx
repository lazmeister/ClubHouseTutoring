import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const MethodSection = () => {
  return (
    <section id="method">
      <h1 className="my-10 text-center font-bold text-4xl font-Butler">
        Method
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className=" md:w-1/2">
                <Image
                  src="/thankfulthoughts.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded-xl shadow-xl hover:opacity-70"
                />
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-3xl font-bold mb-6 font-Butler">01. Assessment</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  All great journeys start with a solid plan. Our comprehensive evaluation
                  is the first step on your child&#39;s path to excellence in literacy.
                  We will assess several key areas to gain a clear understanding of
                  your child&#39;s current abilities and challenges, including:
                </p>
                <ul className="list-disc ml-3 text-xl">
                  <li>Phonological awareness (the ability to identify and manipulate individual sounds in words)</li>
                  <li>Decoding/encoding (reading/spelling skills)</li>
                  <li>Reading fluency</li>
                  <li>Comprehension</li>
                  <li>Working memory and more</li>
                </ul>
                <br />
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  With this information, we will create a personalized plan of instruction to meet your child&#39;s unique needs.
                </p>
                <br />
                <Link
                  href="registration"
                  className="text-neutral-100 px-8 py-4 bg-teal-600 rounded shadow hover:bg-teal-700 font-Nunito cursor-pointer"
                >
                  Let&#39;s Get Started!
                </Link>
              </div>
            </div>
          </SlideUp>

          
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8">
                <h1 className="text-3xl font-bold mb-6 font-Butler">02. Understanding The Clubhouse Difference</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  At our center, we utilize a speech-to-print approach called linguistic phonics,
                  which differs from the traditional print-to-speech programs often used
                  in mainstream phonics instruction.
                </p>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                  So what does this mean for your child?
                </p>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  This approach starts with the sounds of English and how they correspond to different written
                  letters. Your child is exposed to and learning to decode advanced spelling patterns early
                  on in instruction. We teach kids that a single sound can correspond to 1, 2, 3, or 4 letters. 
                </p>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  For example, let&#39;s take the sound of /j/ as in the word jam. That sound can be spelled by:
                </p>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                  j (jump) g (gym) ge (page) dge (bridge) d (graduate)
                </p>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  As kids learn the necessary skills to decode (read) these words effectively, they are also
                  learning how to encode (spell) accurately. All lessons are conducted systematically with
                  knowledge building on previously taught concepts.
                </p>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  We cover all the foundational skills of reading, writing, and spelling (including phonemic
                  awareness, phonics, vocabulary, fluency, comprehension, and handwriting). We base our
                  instruction on the latest insights from the Science of Reading (S.O.R.) research, which
                  explores how children learn to read.
                </p>
              </div>
            </div>
          </SlideUp>
        
      </div>
    </section>
  )
}

export default MethodSection
