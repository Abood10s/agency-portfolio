const IMAGES = {
  heroImage: require("../assets/herosection.jpg"),
  aboutImage: require("../assets/about-illustration.png"),
  ballsImg: require("../assets/balls.png"),
  firstImage: require("../assets/1.jpg"),
  secondImage: require("../assets/2.png"),
  thirdImage: require("../assets/3.png"),
  fourthImage: require("../assets/4.png"),
  firProjectImg: require("../assets/1.svg").default,
  secProjectImg: require("../assets/2.svg").default,
  thirstProjectImg: require("../assets/3.svg").default,
  fourtProjectImg: require("../assets/4.svg").default,
  widgetimg1: require("../assets/widget1.png"),
  widgetimg2: require("../assets/widget2.png"),
  widgetimg3: require("../assets/widget3.png"),
  man1: require("../assets/man1.png"),
  woman: require("../assets/woman.png"),
  man3: require("../assets/man3.png"),
  m1: require("../assets/m1.png"),
  w1: require("../assets/w1.png"),
  w2: require("../assets/w2.png"),
  m2: require("../assets/m2.png"),
  edu1: require("../assets/edu1.png"),
  edu2: require("../assets/edu2.png"),
  edu3: require("../assets/edu3.png"),
  edu4: require("../assets/edu4.png"),
  latest1: require("../assets/latest1.png"),
  latest2: require("../assets/latest2.png"),
  latest3: require("../assets/latest3.png"),
  latest4: require("../assets/latest4.png"),
};
export default IMAGES;

const projectsData = [
  {
    role: "UI/UX",
    image: IMAGES.firProjectImg,
  },
  {
    role: "Digital Marketing",
    image: IMAGES.secProjectImg,
  },
  {
    role: "Digital Marketing",
    image: IMAGES.thirstProjectImg,
  },
  {
    role: "Digital Marketing",
    image: IMAGES.fourtProjectImg,
  },
  {
    role: "UI/UX",
    image: IMAGES.firProjectImg,
  },
  {
    role: "Digital Marketing",
    image: IMAGES.secProjectImg,
  },
];
const customersData = [
  { image: IMAGES.man1 },
  { image: IMAGES.woman },
  { image: IMAGES.man3 },
  { image: IMAGES.woman },
  { image: IMAGES.man1 },
];
const educationData = [
  { image: IMAGES.edu1 },
  { image: IMAGES.edu2 },
  { image: IMAGES.edu3 },
  { image: IMAGES.edu4 },
  { image: IMAGES.edu2 },
];
const teamData = [
  { image: IMAGES.m1, role: "React Js" },
  { image: IMAGES.w1, role: "UI/UX Designer " },
  { image: IMAGES.w2, role: "Back End Developer" },
  { image: IMAGES.m2, role: "React Js" },
  { image: IMAGES.m1, role: "UI/UX Designer " },
  { image: IMAGES.w1, role: "Back End Developer" },
];
const latestData = [
  { id: 1, image: IMAGES.latest1, role: "Blog Title" },
  { id: 2, image: IMAGES.latest2, role: "Blog Title " },
  { id: 3, image: IMAGES.latest3, role: "Blog Title" },
  { id: 4, image: IMAGES.latest4, role: "Blog Title" },
  { id: 5, image: IMAGES.latest1, role: "Blog Title" },
  { id: 6, image: IMAGES.latest2, role: "Blog Title " },
  { id: 7, image: IMAGES.latest3, role: "Blog Title" },
  { id: 8, image: IMAGES.latest4, role: "Blog Title" },
  { id: 9, image: IMAGES.latest1, role: "Blog Title" },
  { id: 10, image: IMAGES.latest2, role: "Blog Title " },
  { id: 11, image: IMAGES.latest3, role: "Blog Title" },
  { id: 12, image: IMAGES.latest4, role: "Blog Title" },
];
export { projectsData, customersData, educationData, teamData, latestData };
