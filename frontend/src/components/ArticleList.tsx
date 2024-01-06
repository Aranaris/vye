import {Link} from 'react-router-dom';
import '../styles/ArticleList.css';

function ArticleList() {
	const testdata = {
		'id': '1',
		'title': 'First Post',
		'content': 'Test Content',
		'postdate': new Date().toDateString(),
		'previousarticleid': 'asdf1',
		'nextarticleid': 'qwerty3',
	};
	const articles = [testdata];

	return (
		<section className='ArticleList'>
			<header className='section-header'>All Articles</header>
			<section className='article-list-container'>
				{articles?.map((article, key) => (
					<Link to={`/articles/${article.id}`} key={key}>{article.title} - {article.postdate}<br></br></Link>
				))}
			</section>
		</section>
	);
}

export default ArticleList;
