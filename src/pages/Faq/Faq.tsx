import PageTemplate from '../../PageTemplate';
import FaqHeader from './components/FaqHeader';
import FaqBody from './components/FaqBody';
import FaqMobileBody from './components/FaqMobileBody';
import './Faq.scss';

const Faq = () => {
  return (
    <PageTemplate header={<FaqHeader />} pageClass="page-faq">
      <div className="faq-container">
        <FaqBody />
      </div>
      <div className='faq-container faq-mobile-container'>
        {/* mobile */}
        <FaqMobileBody />
      </div>
    </PageTemplate>
  );
};

export default Faq;
