import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import classes from "./PostDetail.module.css";
import Categories from "../post/Categories";
import FormatDate from "../post/FormatDate";
import Header from "./Header";

export default function PostDetail() {

  // URLからidを取得
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  return (
    <>
      <Header />
      <div className={classes.container}>
        <img src="https://placehold.jp/800x400.png"/>
        <div className={classes.dateCategoryContainer}>
          <FormatDate date={post.createdAt}/>
          <Categories categories={post.categories}/>
        </div>
        <h1 className={classes.postTitle}>APIで取得した{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </>
  );
}