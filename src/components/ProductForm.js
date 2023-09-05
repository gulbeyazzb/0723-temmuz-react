import axios from "axios";
import { useEffect, useState } from "react";

const productDataInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
};

const ProductForm = () => {
  const [productData, setProductData] = useState(productDataInitial);

  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
        productData
      )
      .then((res) => {
        console.log("Ürün başarıyla eklendi: ", res.data);
        setProductData(productDataInitial);
      });
  };

  useEffect(() => {
    console.log("productData > ", productData);
  }, [productData]);

  return (
    <form onSubmit={productSubmitHandler} className="product-form">
      <label>
        <span>İsim</span>
        <input
          type="text"
          name="name"
          onChange={inputChangeHandler}
          value={productData.name}
        />
      </label>
      <label>
        <span>Açıklama</span>
        <input
          type="text"
          name="description"
          onChange={inputChangeHandler}
          value={productData.description}
        />
      </label>
      <label>
        <span>Görsel URL</span>
        <input
          type="url"
          name="img"
          onChange={inputChangeHandler}
          value={productData.img}
        />
      </label>
      <label>
        <span>Ücret</span>
        <input
          type="number"
          name="price"
          onChange={inputChangeHandler}
          value={productData.price}
        />
      </label>
      <label>
        <span>Stok</span>
        <input
          type="number"
          name="stock"
          onChange={inputChangeHandler}
          value={productData.stock}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
