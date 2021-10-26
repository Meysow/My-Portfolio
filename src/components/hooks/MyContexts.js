import React from "react";

export const ViewPortContext = React.createContext();

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewPortContext.Provider value={{ width }}>
      {children}
    </ViewPortContext.Provider>
  );
};

export default ViewportProvider;
