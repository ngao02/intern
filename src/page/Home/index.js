import React from 'react';
import Infor from '../../components/infor';
import './index.scss';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="title">Information:</div>
      <Infor
        name="Nguyễn Hoàng Ngọc"
        birthday="26/01/2002"
        mail="hoangngocnguyen02@gmail.com"
        phone="0911.420.713"
      />
    </div>
  );
};

export default Home;
