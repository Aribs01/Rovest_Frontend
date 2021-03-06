/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Rovest Records</h1>
              
            </div>
            <h2 className="presentation-subtitle text-center">
             Let the MUSIC speak
            </h2>
          </Container>
        </div>
        
       
      </div>
    </>
  );
}

export default IndexHeader;
