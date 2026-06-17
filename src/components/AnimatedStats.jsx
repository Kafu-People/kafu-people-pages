import { useEffect, useState } from "react";
import { FaGlobe, FaTasks, FaAward, FaUsers } from "react-icons/fa";

const AnimatedStats = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    team: 0,
  });

  const targetStats = {
    clients: 24,
    projects: 65,
    experience: 5,
    team: 5,
  };

  useEffect(() => {
    const statsSection = document.getElementById("stats-section");
    if (!statsSection) return;

    const durationMs = 1200;
    let rafId = 0;
    let startedAt = 0;

    const animate = (timestamp) => {
      if (!startedAt) startedAt = timestamp;
      const t = Math.min(1, (timestamp - startedAt) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);

      setStats({
        clients: targetStats.clients * eased,
        projects: targetStats.projects * eased,
        experience: targetStats.experience * eased,
        team: targetStats.team * eased,
      });

      if (t < 1) rafId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            start();
            io.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      io.observe(statsSection);
      return () => {
        io.disconnect();
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    // Fallback for older browsers
    const onScroll = () => {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        start();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const items = [
    { key: "clients", icon: FaGlobe, label: "Trusted Clients" },
    { key: "projects", icon: FaTasks, label: "Projects Completed" },
    { key: "experience", icon: FaAward, label: "Years of Experience" },
    { key: "team", icon: FaUsers, label: "Professional Team" },
  ];

  return (
    <div
      id="stats-section"
      className="w-full bg-primary py-12 font-inter text-cWhite text-center"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 px-4">
        {items.map(({ key, icon: Icon, label }, index) => (
          <div
            key={key}
            className={`flex flex-col items-center px-4 py-6 md:py-4 ${
              index % 2 === 0 ? "border-r border-white/25" : ""
            } ${index < 2 ? "border-b border-white/25 md:border-b-0" : ""} ${
              index < items.length - 1 ? "md:border-r md:border-white/25" : ""
            }`}
          >
            <Icon size={40} className="mb-4 text-primary-light opacity-90" />
            <h3 className="text-3xl md:text-[42px] font-bold">
              {Math.round(stats[key])}+
            </h3>
            <p className="text-sm md:text-base text-slate-200">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
