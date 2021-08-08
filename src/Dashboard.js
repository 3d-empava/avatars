import React from 'react';
import { Row, Col } from 'antd';
import Card from './Card';

const DashboardClientList = ({ data, userId, minVal, maxVal, history }) => {
  return (
    <div style={{display: 'flex'}}>
      <Card />
      <Card />
    </div>
  );
};

export default DashboardClientList;