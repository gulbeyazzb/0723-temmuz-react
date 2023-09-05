import { Route, Switch } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductsDetailPage from "../pages/ProductsDetailPage";
import LoginPage from "../pages/LoginPage";
import CreateProductPage from "../pages/CreateProductPage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PageContent = ({
  userName,
  products,
  editProduct,
  editFormProduct,
  inputChangeHandler,
  productUpdateHandler,
}) => {
  return (
    // Page Componentleri
    <div className="page-content">
      <Switch>
        <Route path="/counter">
          <CounterPage userName={userName} />
        </Route>
        <Route path="/products/edit">
          <h1>Ürün Düzenleme Sayfası</h1>
          <hr />
          <form onSubmit={productUpdateHandler} className="product-form">
            <label>
              <span>İsim</span>
              <input
                type="text"
                name="name"
                onChange={inputChangeHandler}
                value={editFormProduct.name}
              />
            </label>
            <label>
              <span>Açıklama</span>
              <input
                type="text"
                name="description"
                onChange={inputChangeHandler}
                value={editFormProduct.description}
              />
            </label>
            <label>
              <span>Görsel URL</span>
              <input
                type="url"
                name="img"
                onChange={inputChangeHandler}
                value={editFormProduct.img}
              />
            </label>
            <label>
              <span>Ücret</span>
              <input
                type="number"
                name="price"
                onChange={inputChangeHandler}
                value={editFormProduct.price}
              />
            </label>
            <label>
              <span>Stok</span>
              <input
                type="number"
                name="stock"
                onChange={inputChangeHandler}
                value={editFormProduct.stock}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Route>
        <Route path="/products" exact>
          <ProductsPage products={products} editProduct={editProduct} />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductsDetailPage products={products} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/create-product" exact>
          <CreateProductPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="*">
          <h2>Girdiğiniz URL karşılığı bir sayfa bulunamadı!</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
