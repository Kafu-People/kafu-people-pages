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

const CyberService = () => {
  return (
    <div className="bg-cWhite px-4 py-16 font-inter md:px-8 lg:px-16 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-cBlack md:text-4xl">
          Services <span className="text-black">We Offer</span>
        </h2>
        <p className="px-1 text-base text-cBlack sm:px-10 md:px-20 md:text-lg">
          At Kafu People, we understand the power of technology to transform
          businesses. Our comprehensive suite of services spans AI-driven
          automation, rapid SaaS and MVP development, cloud-native dashboards,
          and modern corporate websites. We partner with you to build
          intelligent, scalable, and user-centric digital solutions that drive
          growth, streamline operations, and elevate your brand in today&apos;s
          competitive landscape.
        </p>
      </div>

      <div className="space-y-14">
        {SERVICE_CATEGORIES.map((category) => {
          const offerings = getOfferingsByCategory(category.id);
          if (offerings.length === 0) return null;

          return (
            <section key={category.id}>
              <h3 className="mb-6 border-b border-slate-200 pb-3 text-xl font-bold text-cDarkBlue md:text-2xl">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {offerings.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:border-cDarkBlue hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center justify-center text-5xl text-cDarkBlue">
                      {SERVICE_ICONS[service.iconKey]}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-cDarkBlue">
                      {service.title}
                    </h4>
                    <p className="text-sm text-cDarkBlue">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CyberService;
