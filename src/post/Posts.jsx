import PostsItem from "./PostsItem";
import { posts } from "../data/posts";

export default function Posts() {
  return (
    <dl>
      {posts.map(elem => 
        <PostsItem post={elem} key={elem.id} />
      )}
    </dl>
  );
}