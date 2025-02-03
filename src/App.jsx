import React from "react";
import { useAppContext } from "./contexts/AppContext";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const {
   contentData
  } = useAppContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Product contentData={contentData[0]} />} />
        <Route path="/taloustieto" element={  <Product contentData={contentData[1]} />} />
     </Routes>
    </div>
  );
};

export default App;
