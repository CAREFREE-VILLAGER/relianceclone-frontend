
import Navbar from '../../Components/Navbar/Navbar';
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import './Home.css';
import { EffectCoverflow } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import Footer from '../../Components/Footer/Footer';

import MySlider from '../../Components/ProductList/ProductList';


function Home() {
  return (
    <div>
      <Navbar />
      <section className='section1'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{ delay: 4000 }} 
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/OnePlus-CE3-Lite-1365x260-copy-9-.jpg?context=bWFzdGVyfGltYWdlc3wxMDk0NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaGMzL2g0Mi8xMDEwOTM2MTI1ODUyNi5qcGd8MTY5MDI4NGE3YmRjZjBmYjA3MzU3MGJlZWM1NTA3M2QwY2U3ZjM1NDE2YjEyY2QxNjdkY2I0NWY1MmViYjY4Ng"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/Apple-Series-9-HEART-RED-1365x260px-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjA3OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2hiNy8xMDEwODcxNzEzNzk1MC5qcGd8YjQzYjdjNTdiOTY4YTllYWU1YjI0MDNkNmFlMmRlZjM5MDNlM2VlMDQ5MDc3MzU5NDMzMTRhMGM2ODdmODY1Ng"
           alt='slide 2'
           />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-D-2-.jpg?context=bWFzdGVyfGltYWdlc3wxMzEzNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGZiL2g0NS8xMDEwNDYzMjU3Mzk4Mi5qcGd8ZWNmODY4NWMyMDAxY2ZiMjIwYTc5NmJkMGRlZThlZjE1ZjYyODQ3NGYyNmVmYmQ5MTFiMDE2M2E1MTgxZmNkMw"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/Apple-iPhone-15-1365x206px.jpg?context=bWFzdGVyfGltYWdlc3w4MDAyOHxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGIzLzEwMTA0NjMyNzA1MDU0LmpwZ3wyOTk3MjIxYzZlZDMxMjQ3OGUzMDQ1MzhmYjA1YWQwYjQyOTc0YzEwNTYyYThhNTFmYjNlM2YyMWU5MjgyNzYz"
              alt="Slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/Large-Appliances-Banners-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMjYwNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDFjL2gwZC8xMDEwNTMzMzAyMjc1MC5qcGd8MDQxM2FmYTU1ZTYxMjZiZGRkM2YzNjI3YWRkYTBkODU0Mjc1YzE5YmY2ZDllY2E5NGNiYmQ5M2E0YzI3ZWJkZg"
              alt="Slide 5"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/Premium-audio-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjIzNTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGMxL2g5My8xMDEwNDYxOTIwNDYzOC5qcGd8MDMxM2RjZTQxNGFlY2FmYjY0OGU1ODhiMDg0OTgzZTU3MGQ2NmQ4ODZlODk5NWQxZDEwMTY2ZmJmNzRkZDkwZg"
              alt="Slide 6"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://www.reliancedigital.in/medias/SDA-Exchange-Fest-Carousel-Banner-07-02-2024-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTU0MTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDE2L2g5OS8xMDA5OTE5NDg1NTQ1NC5qcGd8YjU0ODhjODY4NWVkYTgzZDlhM2E5MDllMzUwYjNkNTk0NjY1YmM3NDAzNDYxMDg2Y2E4MmQzOWYxZDIxNTg5Mg"
              alt="Slide "
            />
          </SwiperSlide>
        </Swiper>
      </section>


      
        <section className='section2'>

              <MySlider/>
        </section>


<Footer/>

    </div>
  );
}

export default Home;
