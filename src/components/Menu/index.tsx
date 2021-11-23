import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { ProductContainerContext } from "../../features/ProductContainerContext";
import { MenuButtons } from "./styles";

interface ProductProps {
  id: string;
  title: string;
}

const Menu = (): JSX.Element => {
  const [categoryList, setCategoryList] = useState([]);
  // const { products, setProducs, getAllProducts } = useContext(ProductContainerContext);

  const handleGetCategoryProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    console.log(response)
    setCategoryList(response.data);
  };

  // const handleGetCategory = async (name: string) => {
  //   const response = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
  //   setProducs(response.data)
  // }

  useEffect(() => {
    handleGetCategoryProducts();
  }, []);

  return (
    <>
      <MenuButtons>
        {/* <button onClick={() => getAllProducts()}>All</button> */}
        {categoryList.map((category, index) => {
          return (
            <div key={index}>
              {/* <button onClick={() => handleGetCategory(category)}>{category}</button> */}
            </div>
          );
        })}
      </MenuButtons>
    </>
  );
};
export default Menu;
