import { motion as m } from "motion/react";
const ServiceStation = () => {
  return (
    <>
    <section className="w-full min-h-screen flex flex-col px-4 md:px-16 pt-5 md:py-28 text-white">
        <m.h2
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.4, delay: 0.1 }}
         viewport={{ once: true }}
         className="text-2xl sm:text-3xl text-center sm:text-left md:text-7xl lg:text-8xl font-bold sm:mb-3 md:mb-4 lg:mb-5">The Service Station</m.h2>
        <m.h3
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.4, delay: 0.2 }}
         viewport={{ once: true }} className="text-[11px] text-center sm:text-left sm:text-xl md:text-2xl lg:text-3xl self-center sm:self-start w-[80%] md:w-[70%] lg:w-[60%] sm:leading-8 md:leading-9 lg:leading-10 sm:font-light">We provide you with our services to ensure your brand&apos;s communication meets your bussiness goals</m.h3>

        <div className="flex flex-col justify-center gap-3 sm:gap-10 md:gap-20 lg:gap-52 px-2 w-full mt-3 sm:mt-14 md:mt-[60px] lg:mt-[67px]">
    
          {/* card 1 */}
          <m.div 
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-[2.5px] text-red-notch border-white shadow-xl pt-4 pb-4 px-4 rounded-2xl bg-[#ffffffa8] w-full max-w-full lg:max-w-[850px] lg:h-[200px] flex flex-col lg:flex-row justify-center items-center text-center">
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0 border-b lg:border-r lg:border-b-0 border-gray-300 last:border-b-0 lg:last:border-r-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Digital Maintenance</h4>
                  <p className="text-xs sm:text-lg">Social content, responses, and full website support botch creative and technical</p>
              </div>
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0 border-b lg:border-r lg:border-b-0 border-gray-300 last:border-b-0 lg:last:border-r-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Activation</h4>
                  <p className="text-xs sm:text-lg">Full scale campaigns with KOLs, buzzers, ambassadors, and O2O execution</p>
              </div>
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Production</h4>
                  <p className="text-xs sm:text-lg">Content shoots, hero videos, IG filters, music, and talent ideas, brought to life</p>
              </div>
          </m.div>

          {/* card 2 */}
          <m.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:self-end border-[2.5px] text-white border-white shadow-xl rounded-2xl bg-[#ffffff00] backdrop-blur-[2px] sm:backdrop-blur-sm w-full max-w-full lg:max-w-[850px] lg:h-[200px] flex flex-col lg:flex-row justify-center items-center text-center pt-4 pb-4 px-4 ">
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0 border-b lg:border-r lg:border-b-0 border-gray-300 last:border-b-0 lg:last:border-r-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Digital Development</h4>
                  <p className="text-xs sm:text-lg font-light">Websites, apps, SEO, and brand assets that power your digital presence</p>
              </div>
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0 border-b lg:border-r lg:border-b-0 border-gray-300 last:border-b-0 lg:last:border-r-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Digital Placement</h4>
                  <p className="text-xs sm:text-lg font-light">Strategic media buying social, Google, programmatic, and more</p>
              </div>
              
              <div className="w-full lg:w-1/3 px-3 py-3 lg:py-0">
                  <h4 className="font-bold text-base sm:text-xl mb-1 lg:mb-2">Digital Analytics</h4>
                  <p className="text-xs sm:text-lg font-light">Insigthful reporting on performance, sentiment, and share of voice</p>
              </div>
          </m.div>
        </div>
    </section>
    </>
  )
}

export default ServiceStation