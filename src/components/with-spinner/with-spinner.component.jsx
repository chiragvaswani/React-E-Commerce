import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

// WithSpinner is a HOC that returns a component that takes in some props (one of which is isLoading)
// Then, depending upon the value of isLoading, the component either returns a spinner component or the original component with all the other props
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
