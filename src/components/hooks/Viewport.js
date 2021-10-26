import React from "react";
import { ViewPortContext } from "./MyContexts";

const useViewport = () => {
  const { width } = React.useContext(ViewPortContext);
  return { width };
};

export default useViewport;
