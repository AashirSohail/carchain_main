import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">CarChain</h5>
            <p>
            CAR-CHAIN is a software that will provide trusted, genuine and verifiable vehicle history reports alongside a traceable spare-part supply chain management system that will eradicate the insecurities that currently exist within prevailing solutions
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">LoginIn</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">SignUp</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title mb-3">Connect with us</h5>
            <a href="#!"><MDBIcon fab size = "2x" icon="facebook" />&ensp;&ensp; </a>
            <a href="#!"><MDBIcon fab size = "2x" icon="instagram" />&ensp;&ensp; </a>
            <a href="#!"><MDBIcon fab size = "2x" icon="linkedin" />&ensp;&ensp; </a>
            <a href="#!"><MDBIcon size = "2x" icon="at" />&ensp;&ensp; </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="a"> CarChain</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;