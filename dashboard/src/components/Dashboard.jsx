import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Summary from './Summary'
import WatchList from './WatchList'
import Orders from './Orders'
import Holdings from './Holdings' 
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <WatchList />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Summary />} />
          <Route exact path='/orders' element={<Orders />} />
          <Route exact path='/holdings' element={<Holdings />} />
          <Route exact path='/positions' element={<Positions />} />
          <Route exact path='/funds' element={<Funds />} />
          <Route exact path='/apps' element={<Apps />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard