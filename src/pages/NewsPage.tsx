import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/newsService';
import './NewsPage.scss';

const NewsPage: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then((data: any) => setNews(data));
  }, []);

  return (
    <div className="news-page">
      <h1>Actualités</h1>
      <ul className="news-list">
        {news.map((article: any) => (
          <li key={article.id} className="news-item">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
