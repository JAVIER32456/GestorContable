import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import card1 from "../../assets/women_barras.png";
import card2 from "../../assets/men_grafica.png";
import card3 from "../../assets/target.png";
import card4 from "../../assets/money.png";

import "swiper/css";
import "swiper/css/pagination";

const FullCarousel = () => {
  return (
    <section className="bg-slate-950 text-white">

      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-10">

            {/* TEXTO */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Control total de tus finanzas
              </h2>
              <p className="text-gray-400">
                Visualiza todos tus gastos e ingresos en un solo lugar y toma decisiones inteligentes.
              </p>
            </div>

            {/* IMAGEN */}
            <div className="flex-1">
              <img
                src={card1}
                alt="dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-10">

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Evita gastos innecesarios
              </h2>
              <p className="text-gray-400">
                Detecta en qué estás gastando de más y optimiza tu dinero.
              </p>
            </div>

            <div className="flex-1">
              <img
                src={card2}
                alt="dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-10">

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Planifica tu futuro
              </h2>
              <p className="text-gray-400">
                Define metas y haz seguimiento a tu progreso financiero.
              </p>
            </div>

            <div className="flex-1">
              <img
                src={card3}
                alt="dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-10">

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tranquilidad financiera
              </h2>
              <p className="text-gray-400">
                Ten control total sin complicaciones.
              </p>
            </div>

            <div className="flex-1">
              <img
                src={card4}
                alt="dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default FullCarousel;

