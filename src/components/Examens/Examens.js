import React, { Component } from "react";
import "../Examens/examens.css";
import ChatBox from "../ChatBox/ChatBox";
import Chart from "react-google-charts";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { Map } from "react-leaflet";
import { PieChart } from 'react-minimal-pie-chart';


class Examens extends Component {
  render() {
    

    return (
      <>
        <div style={{ height: 100 }}></div>


<div >

<Chart 
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'percentage'],
    ['Nmap Udp Scan', 11],
    ['DOS', 2],
    ['Phishing', 2],
    ['Déni de service', 2],
    ['Ecoute clandestine', 7],
  ]}
  options={{
    title: 'CIRT Department',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>

<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Déni de service', 11],
    ['css', 2],
    ['sql injection', 2],
    ['brute force', 2],
    ['Nmap Udp Scan', 7],
  ]}
  options={{
    title: 'Audit Department',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>


</div>
      </>
    );
  }
}

export default Examens;
