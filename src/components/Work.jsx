import React, { useState } from "react";
import { projects } from "../Data";
import { motion, AnimatePresence } from "framer-motion";

function Project() {
  const [select, setSelect] = useState(null);

  const handleOpenModal = (project) => {
    setSelect(project);
  };

  const handleCloseModal = () => {
    setSelect(null);
  };

  return (
    <div
      id="projects"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >

      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-white">PROJECTS</h1>
        <div className="w-40 h-1 bg-red-600 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="border border-white bg-black backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer
            hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
            transition-all duration-500"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h1 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h1>
            </div>

            <p className="text-gray-500 m-4 pt-5 line-clamp-3">
              {project.description}
            </p>

            <div className="mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#150808] text-xs font-semibold text-red-500 rounded-full px-2 py-1 m-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}

      <AnimatePresence>
        {select && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black rounded-xl shadow-2xl w-[90%] max-w-3xl h-[80vh] overflow-hidden relative flex flex-col"
            >

              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-red-600"
                >
                  ×
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex flex-col overflow-y-auto">

                {/* Image */}
                <div className="w-full flex justify-center bg-gray-900 px-4 max-h-[40vh] overflow-hidden">
                  <img
                    src={select.image}
                    alt={select.title}
                    className="w-full h-full object-contain rounded-xl shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {select.title}
                  </h3>

                  <p className="text-gray-400 mb-6 lg:text-base text-xs">
                    {select.description}
                  </p>

                  <div>
                    {select.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#150808] text-xs font-semibold text-red-500 rounded-full px-2 py-1 m-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-red-600 text-gray-400
                      lg:px-6 lg:py-2 px-2 py-1 rounded-xl
                      lg:text-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-red-600 text-gray-400
                      lg:px-6 lg:py-2 px-2 py-1 rounded-xl
                      lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Project;

// import React, { useState } from 'react'
// import { projects } from '../Data'

// function Project() {

//   const [select, setSelect] = useState(null)

//   const handleOpenModal = (project) => {
//     setSelect(project)
//   }

//   const handleCloseModal = (project) => {
//     setSelect(null)
//   }

//   return (
//     <div id='projects' className='py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative '  >
//       <div className='text-center mb-16'>
//         <h1 className='text-4xl font-bold text-white' >PROJECTS</h1>
//         <div className='w-40 h-1 bg-red-600 mx-auto mt-2 '></div>
//         <p className='text-gray-400 mt-4'>A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies</p>
//       </div>

//       <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
//         {projects.map((project) => (
//           <div key={project.id}
//             onClick={() => handleOpenModal(project)} className='border border-white bg-black backdrop-blur-md rounded-2xl  overflow-hidden cursor-pointer ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-500 ' >
//             <div className='p-4' >
//               <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl ' />
//             </div>
//             <div className='p-6'>
//               <h1 className='text-2xl font-bold text-white mb-2  ' >{project.title}</h1>
//             </div>
//             <p className='text-gray-500 m-4 pt-5 line-clamp-3  '>
//               {project.description}
//             </p>
//             <div className='mb-4'>
//               {project.tags.map((tag, index) => (
//                 <span key={index} className='inline-block bg-[#150808] text-xs font-semibold text-red-500 rounded-full px-2 py-1 m-2 '  >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {select && (
//         <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 '>
//           <div className='bg-black rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative  '>
//             <div className='flex justify-end p-4'>
//               <button onClick={handleCloseModal} className='text-white text-3xl font-bold hover:text-red-600 ' >x</button>
//             </div>
//             <div className='flex flex-col '>
//               <div className='w-full flex justify-center bg-gray-900 px-4  '>
//                 <img src={select.image} alt={select.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl ' />
//               </div>
//               <div className='lg:p-8 p-6'>
//                 <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{select.title}</h3>
//                 <p className='text-gray-400 mb-6 lg:text-base text-xs  '>{select.description}</p>
//                 <div>
//                   {select.tags.map((tag, index) => (
//                     <span key={index} className='inline-block bg-[#150808] text-xs font-semibold text-red-500 rounded-full px-2 py-1 m-2 '  >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className='flex gap-4'>
//                   <a href="#" target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-800 hover:bg-red-600 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center ' >
//                   View Code</a>
//                   <a href="#" target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-800 hover:bg-red-600 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center ' >
//                   View Live</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Project
