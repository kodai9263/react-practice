import { useParams } from "react-router-dom";
import classes from "./PostDetail.module.css";
import Categories from "../post/Categories";
import FormatDate from "../post/FormatDate";
import { useEffect, useState } from "react";

export default function PostDetail() {

  // URLからidを取得
  const { id } = useParams();

  // APIでpost詳細を取得
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        if (!res.ok) {
          throw new Error("記事が見つかりませんでした。");
        }
        const data = await res.json();
        setPost(data.post);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
      
    fetcher();
  }, [id]);

  if (isLoading) {
    return <div>読み込み中...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!post) {
    return <div>記事が見つかりませんでした。</div>
  }

  return (
    <>
      <div className={classes.container}>
        <img src={post.thumbnailUrl}/>
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