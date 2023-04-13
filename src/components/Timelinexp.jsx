import React, { useState } from "react";

const Timelinexp = ({ timelineItems }) => {
  const [selectedItem, setSelectedItem] = useState(timelineItems[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
    console.log("cliqué");
  };
  return (
    <>
      <div className="timeline"></div>
      <div className="timeline__items-container">
        {timelineItems.map((item) => (
          <div
            key={item.id}
            className="timeline-item"
            onClick={() => handleClick(item)}
          ></div>
        ))}
      </div>

      <div className="item__description">
        {selectedItem && (
          <Description
            title={selectedItem.title}
            description={selectedItem.description}
          />
        )}
      </div>
    </>
  );
};

const Description = ({ description, title }) => {
  return (
    <div className="description">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Timelinexp;
