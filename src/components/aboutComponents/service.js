import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer,MDBIcon } from "mdbreact";

const PanelPage = () => {
return (
<MDBContainer>
    <h3 className = "mx-auto text-center mb-5" style = {{ "border-radius" : "23px"}}>Features</h3>
  <MDBCardGroup deck>
    <MDBCard>
      <MDBCardBody className = "text-center">
        <MDBIcon className="mb-4 light-blue-text" size="3x" icon="hands-helping" />
        <MDBCardTitle tag="h5" className = "text-center"> Interoperability</MDBCardTitle>
        <MDBCardText>
          This is a wider panel with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </MDBCardText>
        <MDBCardText small muted>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardBody className = "text-center">
        <MDBIcon className="mb-4 light-blue-text" size="3x" icon="file-signature" />
        <MDBCardTitle tag="h5" className = "text-center"> Genuine Reports</MDBCardTitle>
        <MDBCardText>
          This panel has supporting text below as a natural lead-in to
          additional content.
        </MDBCardText>
        <MDBCardText small muted>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardBody className = "text-center">
       <MDBIcon className="mb-4 light-blue-text" size="3x" icon="link" />
        <MDBCardTitle tag="h5" className = "text-center"> Secure Supply Chain</MDBCardTitle>
        <MDBCardText>
          This is a wider panel with supporting text below as a natural
          lead-in to additional content. This panel has even longer
          content than the first to show that equal height action.
        </MDBCardText>
        <MDBCardText small muted>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCardGroup>
</MDBContainer>
);
};

export default PanelPage;