import React, { Component } from "react";
import Title from "./Title";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Re repellenteque incursare vi quotiens nos eum conlimitiis Persarum versabili."
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Re repellenteque incursare vi quotiens nos eum conlimitiis Persarum versabili."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Re repellenteque incursare vi quotiens nos eum conlimitiis Persarum versabili."
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Re repellenteque incursare vi quotiens nos eum conlimitiis Persarum versabili."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
