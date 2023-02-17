import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "01. Assessment",
    description:
      `All great journeys start with a solid plan. Our comprehensive evaluation
      is the first step on your child's path to excellence in literacy.
      We will assess several key areas to gain a clear understanding of
      your child's current abilities and challenges, including:`,
    list: [
      "phonological awareness (the ability to identify and manipulate individual sounds in words)",
      "decoding/encoding (reading/spelling skills).",
      "reading fluency",
      "comprehension and more"
    ],
    footer: "With this information, we will create a personalized plan of instruction to meet your child's unique needs.",
    image: "/thankfulthoughts.png",
  },
  {
    name: "02. Understanding The Clubhouse Difference",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
  },
  {
    name: "03. Invest in your child’s education and watch them thrive!",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
  },
]

const MethodSection = () => {
  return (
    <section id="method">
      <h1 className="my-10 text-center font-bold text-4xl font-Butler">
        Method
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6 font-Butler">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <ul className="list-disc ml-3 text-xl">
                      {project.list?.map((list, id) => {
                        return (
                          <li key={id}>{list}</li>
                      )
                      })}
                    </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default MethodSection
