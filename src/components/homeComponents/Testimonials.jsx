import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { TESTIMONIALS } from "../../constants/site";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsHeader = (
  <div className="mb-12 text-center">
    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
      Client testimonials
    </p>
    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
      Trusted by teams worldwide
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-muted">
      Real feedback from founders and engineering leaders we have partnered
      with on products, migrations, and production systems.
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-surface py-16 font-inter lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        {testimonialsHeader}

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-12"
        >
          {TESTIMONIALS.map(({ id, quote, name, location, project }) => (
            <SwiperSlide key={id} className="!h-auto">
              <TestimonialCard
                quote={quote}
                name={name}
                location={location}
                project={project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
