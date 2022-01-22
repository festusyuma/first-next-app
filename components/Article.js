import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const Article = ({ article }) => {
    return (
        <Link href={'article/[id]'} as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body} &rarr;</p>
            </a>
        </Link>
    )
}

export default Article