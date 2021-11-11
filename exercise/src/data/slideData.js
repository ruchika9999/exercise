import largeImage from "./../images/img-1920x1200.jpg";
import mediumImage from "./../images/img-1280x800.jpg";
import smallImage from "./../images/img-800x368.jpg";

const slideData = [
  {
    id: 0,
    type: "video",
    heading: "LOREM IPSUM DOLOR",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio",
    subHeadingTwo: "Quisque volutpat mattis eros.",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 1,
    type: "image",
    images: [largeImage, mediumImage, smallImage],
    url: null,
    sliderData: [
      {
        id: 0,
        heading: "Lorem ipsum",
        details:
          "Donec nec justo eget felis facilisis  fermentum. Aliquam   porttitor mauris sit amet orci",
      },
      {
        id: 1,
        heading: "Lorem ipsum",
        details:
          "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volutpat.",
      },
      {
        id: 2,
        heading: "Lorem ipsum",
        details: "Eros pede semper  est, vitae luctus  metus libero eu  augue.",
      },
      {
        id: 3,
        heading: "Lorem ipsum",
        details:
          "Donec nec justo eget felis facilisis  fermentum. Aliquam   porttitor mauris sit amet orci",
      },
      {
        id: 4,
        heading: "Lorem ipsum",
        details:
          "Donec nec justo eget felis facilisis  fermentum. Aliquam   porttitor mauris sit amet orci",
      },
    ],
  },
];

export default slideData;
