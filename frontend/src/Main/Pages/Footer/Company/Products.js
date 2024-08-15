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

const Products = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Company', href: '/company', active: false },
    { label: 'Products', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Products | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Our Products
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        At Barter Funds, we offer a range of innovative products designed to enhance your experience with digital currencies. Each product is crafted with the user in mind, providing functionality, security, and ease of use. Explore our offerings below.
      </p>

      <h1 className='sub-title'>Barter Wallet</h1>
      <p>
        The Barter Wallet is your all-in-one solution for managing digital currencies. Store, send, and receive multiple types of digital assets securely in one place. With an intuitive interface and robust security features, the Barter Wallet is designed to meet the needs of both novice and experienced users.
      </p>

      <h1 className='sub-title'>Barter Exchange</h1>
      <p>
        The Barter Exchange platform allows users to trade digital currencies effortlessly. Whether you're looking to convert your assets into Ghanaian Cedis or trade between different digital currencies, our exchange offers real-time trading, competitive rates, and a seamless experience.
      </p>

      <h1 className='sub-title'>Barter Pay</h1>
      <p>
        Barter Pay is our innovative payment gateway solution, enabling businesses to accept digital currencies as payment for goods and services. With Barter Pay, you can easily integrate digital currency payments into your existing systems, offering your customers a modern and flexible payment option.
      </p>

      <h1 className='sub-title'>Barter Mobile App</h1>
      <p>
        Take control of your digital assets on the go with the Barter Mobile App. Available for both iOS and Android, our app allows you to manage your wallet, trade on the exchange, and make payments with ease, all from your smartphone. Stay connected to your finances anytime, anywhere.
      </p>

      <h1 className='sub-title'>Barter Card</h1>
      <p>
        The Barter Card is a physical card linked to your Barter Wallet, allowing you to spend your digital currencies directly in the real world. Use it to make purchases at millions of locations worldwide, or withdraw cash at ATMs, just like a traditional debit card. The Barter Card bridges the gap between digital currencies and everyday spending.
      </p>

      <h1 className='sub-title'>Barter Insights</h1>
      <p>
        Stay informed with Barter Insights, our analytics and reporting tool that provides detailed insights into your transactions, portfolio performance, and market trends. Whether you’re a trader or a business, Barter Insights helps you make data-driven decisions to optimize your digital currency strategy.
      </p>

      <h1 className='sub-title'>Barter API</h1>
      <p>
        For developers and businesses looking to integrate digital currency functionality into their applications, the Barter API offers a powerful set of tools. With comprehensive documentation and support, the Barter API allows you to build custom solutions that leverage the full potential of our platform.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
