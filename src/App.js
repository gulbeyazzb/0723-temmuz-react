import Counter, { PI } from "./components/Counter";
import "./App.css";
import { useEffect, useState } from "react";
import Main from "./layout/Main";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const editFormProductInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
};
// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const [userName, setUserName] = useState("Anonim");
  const [products, setProducts] = useState([]);
  const [editFormProduct, setEditFormProduct] = useState(
    editFormProductInitial
  );
  // Props Drilling
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const editProduct = (product) => {
    setEditFormProduct(product);
  };
  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setEditFormProduct({
      ...editFormProduct,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır
  };

  const productUpdateHandler = (e) => {
    e.preventDefault();
    if (editFormProduct.id) {
      //edit
      let updateProduct = products.map((product) => {
        if (product.id == editFormProduct.id) {
          return editFormProduct;
        } else {
          return product;
        }
      });
      setProducts(updateProduct);
      //edit
    }
    setEditFormProduct(editFormProductInitial);
    history.push("/products");
  };
  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <Main
      userName={userName}
      products={products}
      editProduct={editProduct}
      editFormProduct={editFormProduct}
      inputChangeHandler={inputChangeHandler}
      productUpdateHandler={productUpdateHandler}
    />
  );
}

export default App;
