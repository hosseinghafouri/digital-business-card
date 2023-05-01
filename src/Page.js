import Header from './components/Header';
import Content from './components/ContentMain';
import Fotter from './components/Fotter';
import './page.css';

function Page() {
  return (
    <div className='page'>
    <Header />
    <Content />
    <Fotter />
    </div>
  );
}

export default Page;
