import React from "react";
import Article from "./Article";

const Main = () => {
  const articles = [
    {
      heading: "About Me",
      p1: `I’m a front end developer from Nepal. I love to build visually beautiful, accessible, and
      user friendly websites.`,
      p2: `I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️. With the use of my skills, my passion is introducing me to the various top-notch Technologies of the World. `,
      p3: `Keep scrolling to see some of my latest work!`,
      technologies: true,
    },
    {
      heading: "Portfolio",
      portfolio: true,
    },
  ];
  return (
    <main>
      {articles.map((data, index) => {
        return <Article data={data} index={index} key={index} />;
      })}
    </main>
  );
};

export default Main;
