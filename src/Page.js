import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './page.css';

function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


export default Page;
