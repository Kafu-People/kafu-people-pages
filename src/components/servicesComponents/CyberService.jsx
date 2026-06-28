import { useState } from "react";
import {
  FaRobot,
  FaProjectDiagram,
  FaChartLine,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaCloudSun,
  FaWindowMaximize,
  FaTachometerAlt,
  FaStore,
  FaEnvelope,
  FaSearch,
  FaUsers,
  FaChartBar,
  FaPalette,
  FaCodeBranch,
  FaServer,
  FaLock,
  FaMagic,
} from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import {
  SERVICE_CATEGORIES,
  getOfferingsByCategory,
} from "../../constants/serviceCategories";

const SERVICE_ICONS = {
  robot: <FaRobot />,
  projectDiagram: <FaProjectDiagram />,
  tensorflow: <SiTensorflow />,
  database: <FaDatabase />,
  analytics: <MdOutlineAnalytics />,
  magic: <FaMagic />,
  rocket: <FaRocket />,
  lock: <FaLock />,
  cloudUpload: <FaCloudUploadAlt />,
  chartLine: <FaChartLine />,
  envelope: <FaEnvelope />,
  codeBranch: <FaCodeBranch />,
  tachometer: <FaTachometerAlt />,
  cloudSun: <FaCloudSun />,
  chartBar: <FaChartBar />,
  dashboardCustomize: <MdOutlineDashboardCustomize />,
  server: <FaServer />,
  windowMaximize: <FaWindowMaximize />,
  store: <FaStore />,
  search: <FaSearch />,
  users: <FaUsers />,
  palette: <FaPalette />,
  shield: <FaShieldAlt />,
};

function CategoryHero({ theme, index, title, summary }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      <div className={`relative h-44 sm:h-52 ${imageFailed ? theme.heroGradient : ""}`}>
        {!imageFailed && theme.image ? (
          <img
            src={theme.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        {theme.decorative ? (
          <img
            src={theme.decorative}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-4 bottom-0 h-24 w-24 object-contain opacity-30 sm:h-32 sm:w-32"
          />
        ) : null}
      </div>
      <div className={`border-b px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${theme.headerBg}`}>
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.headerLabel}`}>
          {String(index + 1).padStart(2, "0")} — Practice area
        </p>
        <h3 className={`mt-2 text-2xl font-bold sm:text-3xl ${theme.headerTitle}`}>
          {title}
        </h3>
        <p className={`mt-3 max-w-3xl text-sm leading-relaxed sm:text-base ${theme.headerBody}`}>
          {summary}
        </p>
      </div>
    </>
  );
}

const CyberService = () => {
  return (
    <div className="bg-surface py-16 font-inter lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            What we offer
          </p>
          <h2 className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl">
            Four ways we help you ship
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Kafu People is a product engineering partner for startups and growing
            teams. We build AI-powered software, launch SaaS MVPs, ship cloud
            dashboards, and deliver business websites — from architecture through
            production.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((category) => {
            const theme = category.servicesPage;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`rounded-xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${theme.overviewCard}`}
              >
                <div className="mb-3 text-2xl text-primary">
                  {SERVICE_ICONS[theme.icon]}
                </div>
                <h3 className="text-base font-bold leading-snug text-cDarkBlue">
                  {category.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {category.summary}
                </p>
              </a>
            );
          })}
        </div>

        <div className="space-y-10">
          {SERVICE_CATEGORIES.map((category, index) => {
            const offerings = getOfferingsByCategory(category.id);
            const theme = category.servicesPage;
            if (offerings.length === 0) return null;

            const isLightSection = category.id === "business-websites";

            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-28 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
              >
                <CategoryHero
                  theme={theme}
                  index={index}
                  title={category.title}
                  summary={category.summary}
                />

                <div className={`px-6 py-8 sm:px-8 lg:px-10 ${theme.offeringsBg}`}>
                  <p
                    className={`mb-5 text-sm font-semibold uppercase tracking-wide ${
                      isLightSection ? "text-muted" : "text-white/70"
                    }`}
                  >
                    {offerings.length} capabilities in this practice area
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {offerings.map((service) => (
                      <div
                        key={service.title}
                        className={`rounded-xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${theme.card}`}
                      >
                        <div
                          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl ${theme.iconWrap}`}
                        >
                          {SERVICE_ICONS[service.iconKey]}
                        </div>
                        <h4
                          className={`mb-2 text-base font-semibold leading-snug ${
                            isLightSection ? "text-cDarkBlue" : "text-white"
                          }`}
                        >
                          {service.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed ${
                            isLightSection ? "text-muted" : "text-white/85"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CyberService;
