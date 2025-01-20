import React from 'react';
import { BlogSample } from "./BlogSample";
const blogData = {
    id: 4,
    img: "https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296893/qitchen/blog/uno1occbwsdf7baluajn.png",
    date: "24TH AUG 2023",
    title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
    subTitleOne: "Exploring the Depths of Flavor",
    subTextOne:
      "Qitchen's menu is a treasure trove for food enthusiasts. From the simplest dishes to the most intricate creations, every bite invites you to explore the depths of flavor that only dedication and expertise can achieve.",
    subTitleTwo: "Attention to the Finest Details",
    subTextTwo:
      "At Qitchen, perfection lies in the details. From the precise knife cuts of sashimi to the intricate plating of each dish, every element is meticulously crafted to enhance your dining experience.",
    subTitleThree: "An Invitation to Indulge",
    subTextThree:
      "Every meal at Qitchen is an opportunity to indulge in culinary excellence. The warm atmosphere, paired with exceptional service, invites guests to relax, savor, and create lasting memories.",
  }
export const BlogFour = () => {
  return (
    <>
      <BlogSample
       blogData={blogData}
      />
    </>
  );
}