import React from 'react';
import { MDBInput, MDBFormInline } from 'mdbreact';

const InputPage = () => {
  return (
    <div>
      {/* Material inline */}
      <MDBFormInline className ="mx-auto">
        <MDBInput
          label='Reg Num'
          type='checkbox'
          id='checkbox1'
          containerClass='mr-5'
        />
        <MDBInput
          label='Vin Num'
          type='checkbox'
          id='checkbox2'
          containerClass='mr-5'
        />
      </MDBFormInline>
    </div>
  );
};

export default InputPage;