import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";
import SideBar from "./SideBar";

const Main = ({ userName, products  }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="page-body">
        <SideBar />
        <PageContent userName={userName} products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
