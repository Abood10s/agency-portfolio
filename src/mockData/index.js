const IMAGES = {
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
  edu1: require("../assets/edu1.png"),
  edu2: require("../assets/edu2.png"),
  edu3: require("../assets/edu3.png"),
  edu4: require("../assets/edu4.png"),
};
export default IMAGES;

const projectsData = [
  {
    tag: "UI/UX",
    image: IMAGES.firProjectImg,
  },
  {
    tag: "Digital Marketing",
    image: IMAGES.secProjectImg,
  },
  {
    tag: "Digital Marketing",
    image: IMAGES.thirstProjectImg,
  },
  {
    tag: "Digital Marketing",
    image: IMAGES.fourtProjectImg,
  },
  {
    tag: "UI/UX",
    image: IMAGES.firProjectImg,
  },
  {
    tag: "Digital Marketing",
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
export { projectsData, customersData, educationData };
