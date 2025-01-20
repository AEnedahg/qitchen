import React from 'react';
import { BlogSample } from "./BlogSample";
const blogData = {
    id: 3,
    img: "https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296892/qitchen/blog/arz2u1rcytpaizxnuebi.png",
    date: "24TH AUG 2023",
    title: "Journey through Freshness Exquisite Sushi Selection",
    subTitleOne: "Freshness Redefined with Every Bite",
    subTextOne:
      "Sourcing the finest ingredients is at the heart of Qitchen's philosophy. Our commitment to quality ensures every sushi roll, sashimi, and dish bursts with freshness. From ocean-to-table, every element is thoughtfully curated to bring an unparalleled dining experience.",
    subTitleTwo: "Innovating Sushi Traditions",
    subTextTwo:
      "While staying rooted in traditional sushi-making techniques, Qitchen also embraces innovation. The chefs skillfully blend classic methods with contemporary twists, creating a menu that respects heritage while embracing creativity.",
    subTitleThree: "A Journey Worth Savoring",
    subTextThree:
      "Dining at Qitchen is more than just eating; it's embarking on a journey of discovery. Every dish is designed to transport you through the landscapes of Japan and beyond, offering an immersive culinary adventure.",
  }
export const BlogThree = () => {
  return (
    <>
      <BlogSample
       blogData={blogData}
      />
    </>
  );
}