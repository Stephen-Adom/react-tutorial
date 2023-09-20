import React from 'react';
import Header from '../components/Header';
import TodoLogic from '../components/TodoLogic';

const Home = () => (
  <div className="todos">
    <Header />
    <TodoLogic />
  </div>
);

export default Home;
