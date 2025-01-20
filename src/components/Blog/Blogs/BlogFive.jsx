import React from 'react';
import {BlogSample} from './BlogSample';

const blogData =  {
    id: 5,
    img: "https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296888/qitchen/blog/r7oap3n6l8yqjhz2k1go.png",
    date: "24TH AUG 2023",
    title: "The Qitchen Experience Beyond Sushi",
    subTitleOne: "Crafting Memories, One Meal at a Time",
    subTextOne:
      "Qitchen is dedicated to creating not just meals but memories. Every visit is an opportunity to celebrate life's special moments, big or small, through the universal language of exceptional food.",
    subTitleTwo: "Elevating Dining to an Art Form",
    subTextTwo:
      "Dining at Qitchen is an artistic experience, where food, ambiance, and service come together in perfect harmony. Each dish is a canvas painted with flavors that captivate and inspire.",
    subTitleThree: "Where Passion Meets Purpose",
    subTextThree:
      "At Qitchen, every team member shares a passion for food and a purpose to delight. From the warm greetings to the final farewell, Qitchen ensures every guest feels valued and appreciated, leaving with a heart full of satisfaction.",
  }

export const BlogFive = () => {
  return (
    <>
      <BlogSample
       blogData={blogData}
      />
    </>
  );
}