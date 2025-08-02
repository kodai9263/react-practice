import { useEffect, useState } from "react";
import PostsItem from "./PostsItem";

export default function Posts() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        if (!res.ok) {
          throw new Error("データが見つかりません。");
        }
        const date = await res.json();
        setPosts(date.posts);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();
  }, []);

  if (isLoading) {
    return <div>読み込み中...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!posts) {
    return <div>データが見つかりません。</div>
  }

  return (
    <dl>
      {posts.map(elem => 
        <PostsItem post={elem} key={elem.id} />
      )}
    </dl>
  );
}