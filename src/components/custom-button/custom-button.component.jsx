import React from 'react';

// import './custom-button.scss';

import { CustomButtonContainer } from './custom-button.styled';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherprops
// }) => (
//   <button
//     className={`${inverted ? "inverted" : ""}
//     ${isGoogleSignIn ? "google-sign-in" : ""
//     } custom-button`}
//     {...otherprops}
//   >
//     {children}
//   </button>
// );

export default CustomButton;
