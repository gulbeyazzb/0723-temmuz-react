import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";

const PageContent = ({ userName }) => {
  return (
    // Page Componentleri
    <div className="page-content">
      <MainPage />
      <CounterPage userName={userName} />
      <ProductsPage />
    </div>
  );
};

export default PageContent;
