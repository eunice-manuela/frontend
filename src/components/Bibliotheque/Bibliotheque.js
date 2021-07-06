import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Bibliotheque/bibliotheque.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Pagination from "react-js-pagination";
import Loader from "react-loader-spinner";
import axios from "axios";
import ChatBox from "../ChatBox/ChatBox";
import { convertCSVToArray } from "convert-csv-to-array";
import converter from "convert-csv-to-array";
import DataFrame from "dataframe-js";
import { Row } from "dataframe-js";
//import {dataForge} from 'data-forge'
var dataForge = require("data-forge");

class Bibliotheque extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doc: "",
      data : [],
      n_data : [],
      menace: [],
      students: [
        {
          msg1: "Nmap_udp_scan",
          msg2: "Nmap_udp_scan",
          msg3: "Nmap_udp_scan",
          msg4: "Nmap_udp_scan",
        },
        {
          msg1: "Nmap_udp_scan",
          msg2: "Nmap_udp_scan",
          msg3: "Nmap_udp_scan",
          msg4: "Nmap_udp_scan",
        },
        {
          msg1: "Nmap_udpscan",
          msg2: "Nmap_udp_scan",
          msg3: "Nmap_udp_scan",
          msg4: "Nmap_udp_scan",
        },
        {
          msg1: "Nmap_udp_scan",
          msg2: "Nmap_udp_scan",
          msg3: "Nmap_udp_scan",
          msg4: "Nmap_udp_scan",
        },
      ],
    };
  }

  transpose = (data = []) => {
    return Object.values(data[0]).map((_, colIndex) =>
      data.map((row) => row[colIndex])
    );
  };

  document = () => {
    console.log("show data..");
    fetch("alert_csv.txt", { mode: "no-cors" })
      .then((response) => response.text())
      .then((data) => {
        console.log("loaded ..");
        var formData = new FormData();
        formData.append("alert", data);

        axios
          .post("http://127.0.0.1:8087/classify/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            let data = res.data.menace == undefined ? [] : res.data.menace;
            console.log(data);
            //window.data = Object.values(JSON.parse(data));
            //console.log(window.data);
            let raw_data = Object.values(JSON.parse(data))
            this.setState({ data : raw_data , n_data : this.transpose(raw_data) });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.error(error));
  };

  render() {
    //DataFrame.fromText('alert_csv.txt').then(df => df);
    console.log(this.state.doc);

    return (
      <>
        <button
          className="button button_correction navbar-brand"
          style={{ backgroundColor: "white", zIndex: 0 }}
          onClick={(e) => this.document()}
        >
          <a
            style={{
              color: "#660099",
              textTransform: "uppercase",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Prédire
          </a>
        </button>

        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead><tr>
        {Object.keys(this.state.data).map((hindex, index) => (
          <th key={index} style={{ border: "1px solid black" }}>{hindex}</th>
        ))}
      </tr></thead>
      
      <tbody>
      {this.state.n_data.map((elt , i) => (
        <tr  key={i} style={{ border: "1px solid black" }}>
          {elt.map((elt2, j) => (
            <td key={j}>{elt2}</td>
          ))}
        </tr>
      ))}
      </tbody>
      
    </table>
      </>
    );
  }
}

export default Bibliotheque;
