import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/Article.css';

interface ArticleData {
	'title': string,
	'content': string,
	'postdate': string,
	'previousarticleid': string,
	'nextarticleid': string,
}

function Article() {
	const articleID = useParams();
	const [retrievedData, setRetrievedData] = useState<ArticleData>();

	useEffect(() => {
		if (typeof articleID.id !== 'undefined') {
			const testdata = {
				'title': 'First Post',
				'content': 'Test Content',
				'postdate': new Date().toDateString(),
				'previousarticleid': 'asdf1',
				'nextarticleid': 'qwerty3',
			};
			setRetrievedData(testdata);
		}
	}, [articleID.id]);

	return (
		<section className='Article'>
			<header className='section-header'>{retrievedData?.title}</header>
			<section className='article-container'>
				<p>{retrievedData?.content}</p>
				<p>Posted on {retrievedData?.postdate}</p>
			</section>
		</section>
	);
}

export default Article;
