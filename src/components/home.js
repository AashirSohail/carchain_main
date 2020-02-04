import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBInput} from "mdbreact";
import Radio from "./homeComponents/radioBtn";

const JumbotronPage = () => {
  return (
      <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
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