import giftBox from "../../assets/custom_gift_box.png";
import giftBox2 from "../../assets/custom_gift_box@2x.png";
import giftBox3 from "../../assets/custom_gift_box@3x.png";

import rose from "../../assets/rose.png";
import rose2 from "../../assets/rose@2x.png";
import rose3 from "../../assets/rose@3x.png";

import vanilla from "../../assets/vanilla.png";
import vanilla2 from "../../assets/vanilla@2x.png";
import vanilla3 from "../../assets/vanilla@3x.png";

export default {
  a: {
    id: "a",
    title: "custom gift box",
    variation: "Assorted Flavors ",
    description:
      "This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes!",
    description2:
      "We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!",
    cost: 5500,
    image: giftBox,
    image2: giftBox2,
    image3: giftBox3
  },
  b: {
    id: "b",
    title: "vanilla earl grey macaron",
    variation: "1 piece",
    description:
      "Our most popular flavor! Each macaron is filled with earl grey ganache.!",
    cost: 375,
    image: vanilla,
    image2: vanilla2,
    image3: vanilla3
  },
  c: {
    id: "c",
    title: "rose macarons",
    variation: "1 piece",
    description:
      "Our most romantic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.",
    cost: 375,
    image: rose,
    image2: rose2,
    image3: rose3
  }
};
