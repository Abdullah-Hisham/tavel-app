import Image from 'next/image'
import Button from './Button'
import { Context } from '@/app/layout'
import { useContext, useState, useEffect } from 'react'

const Hero = () => {
  const [rightt, setRightt] = useState(-300)
  const [isOpen, setOpen] = useContext(Context)

  useEffect(() => {
    if (isOpen) {
      setRightt(0)
    } else {
      setRightt(-300)
    }
  }, [isOpen])

  let style = {
    background: 'linear-gradient(135deg, #FFFFFF, #F0F0F0)', // لون متدرج من الأبيض إلى الرمادي الفاتح
    border: '1px solid #CCCCCC', // إضافة حدود للفروق بين العناصر
    borderRadius: '3px', // تدوير الحواف
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // إضافة ظل للتباين
    height:'100vh',
    width: '300px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    right: `${rightt}px`,
    padding: '20px',
    transition: '.5s',
    zIndex: 1
  }
  
  let trystyle={
    zIndex:0
  }

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row" id ='hero'>
      <div className="hero-map" />

      <div style={trystyle} className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div style={trystyle}className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen&&(<div style={style} className="side-nav">
      <ul>
        <li>Home</li>
        <li>services</li>
        <li>contact-us</li>

      </ul>
      </div>)}
      
    </section>
  )
}

export default Hero
