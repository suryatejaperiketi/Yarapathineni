import React from "react";

import { useParams } from "react-router-dom";
import { newsData } from "../../data/newsData";
import "../../Styles/News.css";

function NewsDetails() {

  const { slug } = useParams();

  const article = newsData.find(

    (item) => item.slug === slug

  );

  if (!article) {

    return (

      <div>

        <h2>News not found</h2>

      </div>

    );

  }

  return (

    <section className="news-details-page">

      <div className="news-details-container mt-3">

        <img

          src={article.image}

          alt={article.title}

        />

        <span>{article.month}</span>

        <h1>{article.title}</h1>

        <p>{article.content}</p>

      </div>

    </section>

  );

}

export default NewsDetails;