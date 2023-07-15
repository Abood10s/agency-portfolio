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
export { projectsData, customersData, educationData, teamData };
