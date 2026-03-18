import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [open, setOpen] = useState(false);

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Red Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Red Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-red-500/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section
        id="about"
        className="relative py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-10 overflow-hidden"
      >
        {/* Black Transparent Background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] -z-5" />
        
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-red-900/30 shadow-2xl">

          {/* LEFT SIDE */}
          <motion.div
            className="w-full md:w-1/2 mt-5 md:mt-0 md:text-left px-4 md:px-0 leading-relaxed"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative inline-block">
                Hi, I am
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(220,38,38,0.3)",
                  "0 0 20px rgba(220,38,38,0.6)",
                  "0 0 10px rgba(220,38,38,0.3)",
                ],
              }}
              // transition={{
              //   duration: 2,
              //   repeat: Infinity,
              //   ease: "linear",
              // }}
            >
              Priyanshu Sharma
            </motion.h1>

            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gray-300">I am a </span>
              <span className="text-red-600 font-bold">
                <Typewriter
                  words={[
                    " Full Stack Developer",
                    " UI/UX Developer",
                    " Problem Solver",
                  ]}
                  loop={0}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
                <motion.span
                  className="inline-block ml-1 text-red-600"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 backdrop-blur-sm bg-black/40 p-4 rounded-xl border border-red-900/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(0,0,0,0.6)",
                transition: { duration: 0.3 }
              }}
            >
              I am a Full Stack MERN Developer specializing in building scalable
              and efficient web applications. I focus on modern technologies to
              deliver seamless and intuitive user experiences.
            </motion.p>

            {/* HIRE ME BUTTON */}
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative overflow-hidden group
                inline-flex items-center justify-center
                mt-6 px-8 py-3
                text-lg font-semibold text-white
                rounded-full
                transition-all duration-500
                border border-red-600/50
                bg-red-600
                shadow-[0_0_30px_rgba(220,38,38,0.3)]
              "
            >
              <span className="relative z-10">HIRE ME</span>
              <motion.div
                className="absolute inset-0 bg-red-700"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE - DUMMY IMAGE */}
          <motion.div
            className="flex w-full md:w-1/2 justify-center md:justify-end items-center lg:ml-30 relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Rotating Red Border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-600/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main Image Container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-sm bg-black/60 p-2 border border-red-600/30"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Dummy Image Placeholder */}
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-red-900/50 to-black flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Abstract Avatar Design */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-40 h-40 md:w-48 md:h-48"
                >
                  <motion.circle
                    cx="50"
                    cy="40"
                    r="20"
                    fill="rgba(220,38,38,0.3)"
                    animate={{
                      r: [20, 22, 20],
                      cy: [40, 38, 40],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="50"
                    cy="70"
                    r="25"
                    fill="rgba(127,29,29,0.3)"
                    animate={{
                      r: [25, 27, 25],
                      cy: [70, 68, 70],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  <motion.path
                    d="M30 45 Q 50 60 70 45"
                    stroke="rgba(220,38,38,0.5)"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      d: ["M30 45 Q 50 60 70 45", "M30 45 Q 50 50 70 45", "M30 45 Q 50 60 70 45"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="40"
                    cy="35"
                    r="3"
                    fill="red-600"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="60"
                    cy="35"
                    r="3"
                    fill="red-600"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-5 -right-5 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            >
              ⚛️
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 -left-5 w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -360],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </div>

        {/* POPUP MODAL */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                className="bg-black p-8 rounded-xl border border-red-600/30 text-center max-w-md shadow-2xl"
              >
                <motion.h2
                  className="text-2xl font-bold text-red-600 mb-4"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(220,38,38,0.3)",
                      "0 0 20px rgba(220,38,38,0.6)",
                      "0 0 10px rgba(220,38,38,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Get My CV
                </motion.h2>

                <motion.p
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Please contact me to receive my CV.
                </motion.p>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.p
                    className="text-red-500 font-semibold p-3 bg-black/60 rounded-lg border border-red-900/30"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.8)" }}
                  >
                    📧 priyanshusharma9997@gmail.com
                  </motion.p>
                  <motion.p
                    className="text-red-400 font-semibold p-3 bg-black/60 rounded-lg border border-red-900/30"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.8)" }}
                  >
                    📱 +91 7351374649
                  </motion.p>
                </motion.div>

                <motion.button
                  onClick={() => setOpen(false)}
                  className="mt-6 px-6 py-2 bg-red-600 rounded-lg text-white font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Close</span>
                  <motion.div
                    className="absolute inset-0 bg-red-700"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default About;


// import React, { useState } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { motion, AnimatePresence } from "framer-motion";
// import { logos } from "../Data";

// function About() {

//   const [open, setOpen] = useState(false);

//   return (
//     <section
//       id="about"
//       className="py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-10"
//     >
//       <div className="flex flex-col-reverse md:flex-row items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           className="w-full md:w-1/2 mt-5 md:mt-0 md:text-left px-4 md:px-0 leading-relaxed"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//         >

//           <motion.h1
//             className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Hi, I am
//           </motion.h1>

//           <motion.h1
//             className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             Priyanshu Sharma
//           </motion.h1>

//           <motion.h3
//             className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-red-600"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <span className="text-white">I am a </span>

//             <span className="text-red-600 font-bold">
//               <Typewriter
//                 words={[
//                   " Full Stack Developer",
//                   " UI/UX Developer",
//                   " Problem Solver",
//                 ]}
//                 loop={0}
//                 typeSpeed={100}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//               <span className="text-red-500">|</span>
//             </span>
//           </motion.h3>

//           <motion.p
//             className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             I am a Full Stack MERN Developer specializing in building scalable
//             and efficient web applications. I focus on modern technologies to
//             deliver seamless and intuitive user experiences.
//           </motion.p>

//           {/* HIRE ME BUTTON */}
//           <motion.button
//             onClick={() => setOpen(true)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="
//             inline-flex items-center justify-center
//             mt-6 px-8 py-3
//             text-lg font-semibold text-white
//             rounded-full
//             transition-all duration-500
//             hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
//             border-white
//             shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
//             bg-gradient-to-r from-red-600 to-[#f7229a]
//             "
//           >
//             HIRE ME
//           </motion.button>

//         </motion.div>


//         {/* RIGHT IMAGE */}
//         <motion.div
//           className="flex w-full md:w-1/2 justify-center md:justify-end items-center lg:ml-30"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <motion.img
//             src={logos.image1}
//             alt="Priyanshu Sharma"
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//             className="w-full h-full rounded-full object-cover
//             drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]
//             hover:scale-105 hover:rotate-1
//             hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]"
//           />
//         </motion.div>

//       </div>


//       {/* POPUP MODAL */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >

//             <motion.div
//               initial={{ scale: 0.7 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.7 }}
//               className="bg-[#0b0203] p-8 rounded-xl border border-gray-700 text-center max-w-md"
//             >

//               <h2 className="text-2xl font-bold text-white mb-4">
//                 Get My CV
//               </h2>

//               <p className="text-gray-400 mb-6">
//                 Please contact me to receive my CV.
//               </p>

//               <p className="text-red-500 font-semibold">
//                 📧 Mail : priyanshusharma9997@gmail.com
//               </p>

//               <p className="text-red-500 font-semibold mt-2">
//                 📱 Contact Number : +91 7351374649
//               </p>

//               <button
//                 onClick={() => setOpen(false)}
//                 className="mt-6 px-6 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
//               >
//                 Close
//               </button>

//             </motion.div>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// }

// export default About;

// import React from 'react'
// import { Typewriter } from 'react-simple-typewriter'

// function About() {
//   return (
//     <div>
//       <section id='about' className='py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-10 '>
//         <div className="flex flex-col-reverse md:flex-row items-center">

//           {/* left */}
//           <div className="w-full md:w-1/2 mt-5 md:mt-0 justify-between items-center  md:text-left px-4 md:px-0 leading-relaxed">

//             {/* greeting */}
//             <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
//               Hi, I am
//             </h1>
//             <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
//               Priyanshu Sharma
//             </h1>
//             <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-red-600 leading-tight'>
//               <span className='text-white'>
//                 I am a
//               </span>
//               <span className="text-red-600 font-bold ">
//                 <Typewriter
//                   words={[
//                     " Full Stack Developer",
//                     " UI/UX Developer",
//                     "  Problem Solver "
//                   ]}
//                   loop={0}
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={2000}
//                 // cursor
//                 // cursorStyle="|"
//                 />
//                 <span className="text-red-500">|</span>
//               </span>
//             </h3>

//             <p className=' text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '>
//               I am a Full Stack MERN Developer specializing in building scalable and efficient web applications. With strong skills in both frontend and backend development, I focus on leveraging modern technologies to deliver seamless and intuitive user experiences.
//             </p>

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//     inline-flex items-center justify-center
//     mt-6 px-8 py-3
//     text-lg font-semibold text-white
//     rounded-full
//     transition-all duration-500 ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]  border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
//     bg-gradient-to-r from-red-600 to-[#f7229a] hover:shadow-red-500/60
//     focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black
//   "
//             >
//               DOWNLOAD CV
//             </a>

//           </div>
//           {/* Right Side */}

//           <div className="flex w-full md:w-1/2 justify-center md:justify-end items-center lg:ml-30">
//             <img
//               src="img.png"
//               alt="Priyanshu Sharma"
//               className="
//       w-full h-full rounded-full object-cover
//       drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]
//       transition-all duration-500 ease-out
//       hover:scale-105 hover:rotate-1
//       hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]
//     "
//             />
//           </div>


//         </div>
//       </section>
//     </div>
//   )
// }

// export default About
