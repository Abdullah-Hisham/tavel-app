import Image from 'next/image'
import Button from './Button'
import { useContext, useState, useEffect } from 'react'

const Hero = () => {
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
    right: `-300px`,
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
          className="absolute right-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">منطقة معسكر بوتوك ترونو</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          نريد أن نكون في كل رحلة من رحلاتك بحثًا عن الرضا عند رؤية جمال الطبيعة غير القابل للفساد. يمكننا مساعدتك في مغامرة حول العالم في تطبيق واحد فقط
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
           ١٠٠٠
            <span className="regular-16 lg:regular-20 ml-1">من التقيمات الممتازة</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="حمل التطبيق" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="كيف نعمل ؟" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div style={trystyle}className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">الموقع</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">مصر</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">المسافه</p>
              <p className="bold-20 text-white"> ١٧٣.٢٨ميل</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">الارتفاع</p>
              <p className="bold-20 text-white">٢.٠٤٠ كم</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default Hero
