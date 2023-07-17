import React from "react";

const HomePage = React.lazy(() => import("../pages/home"));
const AboutPage = React.lazy(() => import("../pages/about"));
const ServicesPage = React.lazy(() => import("../pages/services"));
const LatestPage = React.lazy(() => import("../pages/latestnews"));
const ContactPage = React.lazy(() => import("../pages/contact"));
const SingleBlogPage = React.lazy(() => import("../pages/singleBlog"));

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
