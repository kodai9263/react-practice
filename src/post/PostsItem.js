import Categories from './Categories';
import classes from './Posts.module.css';

export default function PostsItem({ post }) {

  // 日付のフォーマット関数
  const formatDate = date => new Date(date).toLocaleDateString();

  return (
    <>
      <div className={classes.container}>
        <header className={classes.postHeader}>
          <p>{formatDate(post.createdAt)}</p>
            <Categories categories={post.categories} />
        </header>
        <h1 className={classes.postTitle}>APIで取得した{post.title}</h1>
        <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </>
  );
}