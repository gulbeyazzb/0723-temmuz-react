import { Route, Switch } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductsDetailPage from "../pages/ProductsDetailPage";

const PageContent = ({ userName, products }) => {
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
          <form></form>
        </Route>
        <Route path="/products" exact>
          <ProductsPage products={products} />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductsDetailPage products={products} />
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
