import React, { useState } from 'react'
import { Tooltip, Grow } from '@mui/material'

import { watchList } from '../data/data'
import WatchListItem from './WatchListItem'

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchList.length} / 50</span>
      </div>

      <ul className="list">
        {watchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* <DoughnutChart data={data} /> */}
    </div>
  )
}

export default WatchList