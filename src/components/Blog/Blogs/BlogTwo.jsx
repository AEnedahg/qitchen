import React from 'react';
import { BlogSample } from "./BlogSample";
const blogData = {
  id: 2,
  date: "24TH AUG 2023",
  img: "https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296851/qitchen/blog/hwxclxody7nxl0uaae16.png",
  title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
  subTitleOne: "The Art of Perfecting Every Plate",
  subTextOne:
    "At Qitchen, crafting a dish is not just about cooking; it's about storytelling. Every ingredient is carefully sourced, every technique perfected, and every plate tells a story of relentless pursuit of excellence. Qitchen's chefs bring their passion and skill to the forefront, creating masterpieces that captivate both the eyes and the palate.",
  subTitleTwo: "A Symphony of Flavors",
  subTextTwo:
    "Each dish is designed to strike the perfect balance between taste and presentation. From bold, rich flavors to delicate and nuanced notes, Qitchen offers a diverse culinary experience that transcends expectations. The interplay of colors and aromas enhances the dining experience, turning every meal into a memorable occasion.",
  subTitleThree: "Celebrating the Joy of Dining Together",
  subTextThree:
    "Qitchen is more than a restaurant; it's a gathering space for friends, family, and loved ones. Whether you're celebrating a milestone or enjoying a quiet dinner, Qitchen fosters connections through its inviting ambiance and attentive service. Every meal becomes an occasion to cherish.",
};

export const BlogTwo= () => {
  return (
    <>
      <BlogSample
       blogData={blogData}
      />
    </>
  );
}