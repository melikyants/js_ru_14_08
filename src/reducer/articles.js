import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles} from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) =>({
    ...acc,
    [article.id]: article
}), {})
export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
    }

    return articles
}