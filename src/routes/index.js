import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";
import LatestPage from "../pages/latestnews";
import ContactPage from "../pages/contact";
import SingleBlogPage from "../pages/singleBlog";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  LATEST_NEWS: "/latestnews",
  CONTACT_US: "/contact",
  SINGLE_BLOG: "/blog/:id",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.ABOUT, element: <AboutPage /> },
  { path: PATHS.SERVICES, element: <ServicesPage /> },
  { path: PATHS.LATEST_NEWS, element: <LatestPage /> },
  { path: PATHS.CONTACT_US, element: <ContactPage /> },
  { path: PATHS.SINGLE_BLOG, element: <SingleBlogPage /> },
  { path: "*", element: <h1>Sorry ..!</h1> },
];
