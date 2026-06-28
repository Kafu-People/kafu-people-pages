import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ADMIN_PATHS } from "../constants/admin";

const AdminNoIndex = () => {
  const { pathname } = useLocation();
  if (ADMIN_PATHS.includes(pathname)) {
    return <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>;
  }
  return null;
};

export default AdminNoIndex;
