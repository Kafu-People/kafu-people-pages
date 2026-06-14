import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { TESTIMONIALS } from "../../constants/site";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCard = ({ quote, name, location, project }) => (
  <blockquote className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <p className="flex-1 text-sm leading-relaxed text-slate-700">
      &ldquo;{quote}&rdquo;
    </p>
    <footer className="mt-6 border-t border-slate-100 pt-4">
      <cite className="not-italic">
        <span className="block font-semibold text-slate-900">{name}</span>
        <span className="mt-1 block text-sm text-muted">{location}</span>
        <span className="mt-1 block text-xs font-medium text-accent">
          {project}
        </span>
      </cite>
    </footer>
  </blockquote>
);

const Testimonials = () => {
  return (
    <section className="bg-surface py-16 font-inter lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
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

        <div className="testimonials-carousel relative px-1 sm:px-10 [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet]:bg-slate-400 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-slide]:flex [&_.swiper-slide]:h-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="!pb-12"
            spaceBetween={24}
            slidesPerView={1}
            loop
            speed={800}
            grabCursor
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
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

          <button
            type="button"
            className="testimonials-prev absolute left-0 top-[38%] z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition hover:border-primary hover:text-primary sm:inline-flex"
            aria-label="Previous testimonial"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="testimonials-next absolute right-0 top-[38%] z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition hover:border-primary hover:text-primary sm:inline-flex"
            aria-label="Next testimonial"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
