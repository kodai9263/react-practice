import './Object.css';

export default function ObjectItem({ post }) {

  // 日付のフォーマット関数
  const formatDate = date => new Date(date).toLocaleDateString();

  // カテゴリーの分割代入
  const renderCategories = (categories) => {
    return categories.map((category, index) => (
      <p key={index} className='category-tag'>{category}</p>
    ));
  }

  return (
    <>
    <div className="container">
      <header className='object-header'>
        <p>{formatDate(post.createdAt)}</p>
        <div className='category-container'>{renderCategories(post.categories)}</div>
      </header>
      <h1 className='object-title'>APIで取得した{post.title}</h1>
      <div className='object-content' dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
    </>
  );
}