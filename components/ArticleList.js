import articlesStyles from '../styles/Article.module.css'
import { Article } from "./index";

const ArticleList = ({ articles }) => {
    return (
        <div className={articlesStyles.grid}>
            { articles.map((article, id) => <Article key={id} article={article} />) }
        </div>
    )
}

export default ArticleList