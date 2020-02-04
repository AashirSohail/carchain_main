import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBInput} from "mdbreact";
import Radio from "./homeComponents/radioBtn";

const JumbotronPage = () => {
  return (
      <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }} className = "text-center">
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5 text-center">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Search Vehicle to see their Vehicle History Report</MDBCardTitle>
                <p className="mx-5 mb-5">
                  Search vehicle by its Registration Number or Vin Number, if it is on the system you will b able to see its vehicle history report quickly.
                </p>
                <MDBInput className="mw-75" label="Search by Vin Number OR Registration Number" background />
                <Radio/>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="search" className="mr-2"></MDBIcon> Search For Vehicle</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default JumbotronPage;