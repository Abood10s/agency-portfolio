import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";
import LatestPage from "../pages/latestenws";
import ContactPage from "../pages/contact";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  LATEST_NEWS: "/latestnews",
  CONTACT_US: "/contact",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.ABOUT, element: <AboutPage /> },
  { path: PATHS.SERVICES, element: <ServicesPage /> },
  { path: PATHS.LATEST_NEWS, element: <LatestPage /> },
  { path: PATHS.CONTACT_US, element: <ContactPage /> },
  { path: "*", element: <h1>Sorry ..!</h1> },
];
