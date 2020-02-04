import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import dan from "./../../images/Danial.png";
import ash from "./../../images/Aashir.png";
import has from "./../../images/Hassaan.png";
import sai from "./../../images/saim.png";

const PanelPage = () => {
return (
    <MDBContainer className = 'mt-5 text-center'>
        <h3 className = "mb-5">Meet our Team</h3>
        <MDBRow>
            <MDBCol md = "3">
                <div className = "card pt-3">
                    <img src={dan} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />
                    <h5>Danial Ahmed</h5>
                    <p>Developer</p>
                </div>
            </MDBCol>
            <MDBCol md = "3">
                <div className = "card pt-3">
                    <img src={ash} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />
                    <h5>Aashir Sohail</h5>
                    <p>Developer</p>
                </div>
            </MDBCol>
            <MDBCol md = "3">
                <div className = "card pt-3">
                    <img src={has} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />
                    <h5>Hassaan Ahmed</h5>
                    <p>Developer</p>
                </div>
            </MDBCol>
            <MDBCol md = "3">
                <div className = "card pt-3">
                    <img src={sai} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />
                    <h5>Saim Raza</h5>
                    <p>Developer</p>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
);
};

export default PanelPage;