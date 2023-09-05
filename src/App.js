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

  //Form öğelerini tutacak olan state tanımı; (başlangıç değeri boş value'lara sahip nesne)

  const [editFormProduct, setEditFormProduct] = useState(
    editFormProductInitial
  );
  // Props Drilling
  const history = useHistory(); // route history için tanımlandı
  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const editProduct = (product) => {
    // edit linkine click edildiğinde editProduct functionuna ilgili product'ı parametre olarak göndermiştik o function tanımı;
    setEditFormProduct(product); //Form öğelerini ilgili product verisi ile doldurur
  };
  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target; // name = "password" | "email" | "name"
    setEditFormProduct({
      ...editFormProduct,
      [name]: type === "checkbox" ? checked : value,
    }); // setter async çalışır
  };

  const productUpdateHandler = (e) => {
    //Form update edildiğinde onSubmit attribute ile çağrılan function tanımı
    e.preventDefault(); //update edilen form(e)'un default değerleri sıfırlanır.
    if (editFormProduct.id) {
      //Eğer editlencek product'ın id değeri varsa;
      //edit
      let updateProduct = products.map((product) => {
        //ürünlerde gezin
        if (product.id == editFormProduct.id) {
          //ilgili ürünün id'si ile ürünlerdeki bir id eşleşiyorsa;
          return editFormProduct; //editlenecek ürünü döndür.
        } else {
          return product; //yoksa herhangi ürünü döndür
        }
      });
      setProducts(updateProduct); //döndürülen product ile Products'ı set et.
      //edit
    }
    setEditFormProduct(editFormProductInitial); //Formu resetler.
    history.push("/products"); //Update edildiğinde Products sayfasına yönlendirir
  };
  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <Main
      userName={userName}
      products={products}
      editProduct={editProduct} //edit linki onClick edildiğinde çalışacak olan func -> productsPage
      editFormProduct={editFormProduct} //Editlenme aşamasında form verilerini taşıyacak olan state
      inputChangeHandler={inputChangeHandler} //pageContent'te ki form yapısına iletilecek
      productUpdateHandler={productUpdateHandler} //form submit edildiğinde onSubmit attribute functionu -> pageContent'e.
    />
  );
}

export default App;
