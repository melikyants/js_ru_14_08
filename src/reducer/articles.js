import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles} from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
  ...acc,
  [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
        const article = articles[payload.articleId]
            return {
              ...articles,
              [payload.articleId]:{
                ...article,
                comments: (article.comments || []).concat(randomId),
              }
            }
    }

    return articles
}