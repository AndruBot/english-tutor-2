import React from 'react';
import Footer from './components/Footer';

interface PageTemplateProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  pageClass?: string; // Add pageClass prop
  extraFooter?: React.ReactNode; // Add optional extraFooter prop
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, header, pageClass, extraFooter }) => {
  return (
    <React.Fragment>
      {header && <header>{header}</header>}
      <div div="page" className={`page-template ${pageClass || ''}`}>
        <main>
          {children}
          <Footer />
        </main>
      </div>
      <div className={`extra-footer ${pageClass || ''}`}>
        {extraFooter && extraFooter}
      </div>
    </React.Fragment>
  );
};

export default PageTemplate;