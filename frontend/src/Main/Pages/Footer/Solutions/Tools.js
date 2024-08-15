import React from 'react';
import '../../Page.css'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Block from '../../components/Block'
import Content from '../../components/Content'
import Head from '../../components/Head'
import Breadcrumb from '../../components/Breadcrumb'
import PageContainer from '../../components/PageContainer'
import BlockHead from '../../components/BlockHead'
import BlockHeadContent from '../../components/BlockHeadContent'
import BlockTitle from '../../components/BlockTitle'

const Tools = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Solutions', href: '/solutions', active: false },
    { label: 'tools', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Tools | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Tools & Resources
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Barter Funds provides a range of tools and resources to help you make the most of your digital currency experience. From calculators to analytics, we offer everything you need to manage your finances and make informed decisions.
      </p>

      <h1 className='sub-title'>Currency Conversion Calculator</h1>
      <p>
        Easily convert between digital currencies and fiat currencies with our currency conversion calculator. Get real-time rates and accurate conversions to help you make the best financial decisions.
      </p>

      <h1 className='sub-title'>Market Analysis Tools</h1>
      <p>
        Stay on top of the market with our analysis tools. Track trends, monitor prices, and get insights into market movements to inform your trading strategies.
      </p>

      <h1 className='sub-title'>Security Tools</h1>
      <p>
        Protect your digital assets with our security tools. From multi-factor authentication to encryption, we provide the resources you need to keep your funds safe.
      </p>

      <h1 className='sub-title'>Learning Resources</h1>
      <p>
        Expand your knowledge with our learning resources. Access tutorials, guides, and articles that cover everything from the basics of digital currency to advanced trading strategies.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Tools;
