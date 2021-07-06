import React, { Component } from "react";
import "../user/notifications.css";

export class Notifications extends Component {
  constructor(props) {
    super(props); 
    //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      
    };

  }



  render() {
    var colorLegend = [
        //reds from dark to light
        {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
        //neutral grey
        {color: "#f0f0f0", text: 'Neutral'},
        // blues from light to dark
        "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
      ];

      var tooltipProps = [{
        css: 'symbol',
        prop: '_id'
      }, {
        css: 'value',
        prop: 'value',
        display: 'Last Value'
      }, {
        css: 'change',
        prop: 'colorValue',
        display: 'Change'
      }];

      var data = this.props.data.map(d => ({
        _id: d._id,
        value: d.value,
        colorValue: d.sentiment,
        selected: d.selected
      }));

    return (
      <>
       
      </>
    );
  }
}
