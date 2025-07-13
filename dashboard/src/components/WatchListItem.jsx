import React, { useState } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const watchListItem = ({stock, index}) => {
    const [showWatchListItem, setShowWatchListItem] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListItem(true);
    };
    const handleMouseExit = () => {
        setShowWatchListItem(false);
    };
  return (
    <li
      className="watchlist-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      key={index}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="downIcon" />
          ) : (
            <KeyboardArrowUp className="upIcon" />
          )}

          <span className="percent">{stock.price}</span>
        </div>
      </div>
    </li>
  );
}

export default watchListItem