import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";
import SideBar from "./SideBar";

const Main = ({
  userName,
  products,
  editProduct,
  editFormProduct,
  inputChangeHandler,
  productUpdateHandler,
}) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="page-body">
        <SideBar />
        <PageContent
          userName={userName}
          products={products}
          editProduct={editProduct}
          editFormProduct={editFormProduct}
          inputChangeHandler={inputChangeHandler}
          productUpdateHandler={productUpdateHandler}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
