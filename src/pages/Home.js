import React from 'react';
import AllChart from '../components/AllChart/AllChart';
import Banner from '../components/Banner/Banner';
import BazarSchedule from '../components/BazarDay/BazarSchedule';
import AllMemberInfo from '../components/MemberInfo/AllMemberInfo';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <BazarSchedule/>
      <AllChart/>
      <AllMemberInfo/>
    </>
  );
};

export default Home;