import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "../canvas";

const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 xs:top-[120px] top-16  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Success</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a SSE(senior software engineer), <br className='sm:block hidden' />
          </p> */}
          <p className="text-pink-500 text-xs sm:text-lg font-black">I am a programmer and developer, I create and develop websites, softwares, web applications, </p>            
          <p className="sm:max-[600px]:hidden text-orange-200 font-black text-xs sm:text-lg">all website and software project and all projects concerning programming</p>          
        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full mb-1'
              >
                <svg fill="currentColor" aria-hidden="true" width="14" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 5.65c.2-.2.5-.2.7 0L8 9.79l4.15-4.14a.5.5 0 0 1 .7.7l-4.5 4.5a.5.5 0 0 1-.7 0l-4.5-4.5a.5.5 0 0 1 0-.7Z" fill="currentColor"></path></svg>
              </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
