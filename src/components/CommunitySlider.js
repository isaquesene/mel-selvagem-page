import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CommunitySlider = ({testimonials}) => {
  return (
    <Swiper 
      slidesPerView={3} 
      spaceBetween={15} 
      centeredSlides={'auto'} 
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial, idx)=>{
        // destructure receitas
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className='relative'>
              {/* image */}
              <div>
                <img src={image} alt=''/>
              </div>
              {/* message & name */}
              <div className='text-center'>
                <div className='mb-8 italic text-lg font-light'>{message}</div>
                <div className='flex itmes-center justify-center gap-x-[3px]'>
                  <span className='text-[30px] text-primary-400 font-bold'>~</span>
                  <div className='text-[20px] font-bold'>{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
