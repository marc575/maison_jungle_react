import React, { useState } from "react";

const ReadMore = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (isExpanded || text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}`;
  };

  return (
    <div>
      <p>
        {renderText()}
        {text.length > maxLength && (
            <button
            className="readmore"
            onClick={toggleReadMore}
            >
            {isExpanded ? "." : "..."}
            </button>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
