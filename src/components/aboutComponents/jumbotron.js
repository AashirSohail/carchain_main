import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className = "winter-neva-gradient">
            <MDBCardBody>
              <MDBCardTitle className="h2">
                CarChain
              </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                Know your Car.
              </p>
              <MDBCardText>
              CAR-CHAIN is a software designed to provide trusted, genuine and verifiable vehicle history reports spare part supply chain management system that will eradicate insecurities within prevailing solutions such as tampered reports and the use of non-OEM spare parts through its secure blockchain network.
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn
                  color="primary"
                  className="waves-effect"
                >
                  Our Features <MDBIcon far icon="gem" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="waves-effect"
                >
                  Download App <MDBIcon icon="download" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;