import React from "react";
import Card from "./Card";

export default function AllCards() {
  const cardData = [
    {
      title: "Grow Together",
      body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      img: "illustration-grow-together",
    },
    {
      title: "Flowing Conversations",
      body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      img: "illustration-flowing-conversation",
    },
    {
      title: "Your Users",
      body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      img: "illustration-your-users",
    },
  ];
  return (
    <div className="sm:m-4flex flex-wrap justify-center mb-12 md:m-12 pb-12">
      {cardData.map((card, index) => (
        <Card
          key={index}
          index={index}
          title={card.title}
          body={card.body}
          img={card.img}
        />
      ))}
    </div>
  );
}
