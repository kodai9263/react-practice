import { Link } from 'react-router-dom';
import Categories from './Categories';
import FormatDate from './FormatDate';
import classes from './PostsItem.module.css';

export default function PostsItem({ post }) {

  return (
    <>
      <Link to={`/posts/${post.id}`} className={classes.link}>
        <div className={classes.container}>
        <header className={classes.postHeader}>
          <FormatDate date={post.createdAt} />
          <Categories categories={post.categories} />
        </header>
        <h1 className={classes.postTitle}>APIで取得した{post.title}</h1>
        <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </Link>
    </>
  );
}