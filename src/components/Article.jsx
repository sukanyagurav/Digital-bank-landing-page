import React from 'react';

const Article = ({ article }) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-xl'>

      <img
        src={article.imgSrc}
        alt={article.title}
        className="w-full h-[200px] object-cover"
      />
      <div className='p-6'>
        <span className="text-gray-500 text-sm">{article.author}</span>
        <h2  className='my-2 text-lg'>{article.title}</h2>
        <p className='text-gray-600 text-[0.9rem] '>{article.description}</p>
      </div>
    </div>
  );
};

export default Article;
