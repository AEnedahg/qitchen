import React from 'react';
import { BlogSample } from './BlogSample';


const blogData = {
  id: 1,
  img: "https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296853/qitchen/blog/tghh4xcx5barkcgn4blu.png",
  date: "24TH AUG 2023",
  title: "How Qitchen Redefines Flavor Harmony in Every Bite",
  subTitleOne: "Unveiling Culinary Artistry: A Journey into Qitchen's Soul",
  subTextOne:
    "In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.",
  subTitleTwo: "Crafting a Feast for the Senses",
  subTextTwo:
    "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece. The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.",
  subTitleThree: "Beyond Sushi: Nurturing Connections",
  subTextThree:
    "While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table. The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.",
};
  


export const BlogOne = () => {
  return (
    <>
      <BlogSample
       blogData={blogData}
      />
    </>
  );
}