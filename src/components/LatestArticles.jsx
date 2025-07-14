import React from 'react';
import Container from './Container';
import Article from './Article';

const articles= [
    {
        id:1,
        imgSrc:"/images/image-currency.jpg",
        author:"By Claire Robinson",
        title:"Receive money in any currency with no fees",
        description:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },{
        id:2,
        imgSrc:"/images/image-restaurant.jpg",
        author:"By Wilson Hutton",
        title:"Treat yourself without worrying about money",
        description:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
    },{
        id:3,
        imgSrc:"/images/image-plane.jpg",
        author:"By Wilson Hutton",
        title:"Take your Easybank card wherever you go",
        description:"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ..."
    },{
        id:4,
        imgSrc:"/images/image-confetti.jpg",
        author:"By Claire Robinson",
        title:"Our invite-only Beta accounts are now live!",
        description:"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }
]

const LatestArticles = () => {
  return (
    <Container classes='py-28 px-6'>
      <section>
        <h2 className='text-4xl mb-4'>Latest Articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-12'>
            {articles.map(article=>(
                <Article key={article.id} article={article}/>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default LatestArticles;
